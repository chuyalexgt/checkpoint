/* eslint-disable no-console */
import { defineStore } from 'pinia'
import { createUser, getUser, loginByEmail } from '~/api/user'
import { api } from '~/boot'
import type { mainStore } from '~/interfaces/mainStore'

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () =>
    ({
      authSuccess: false,
      userJwt: '',
      userData: null,
      sessionIsExpired: false,
    } as mainStore),

  actions: {
    setHeaders() {
      api.defaults.headers.common.authorization = this.userJwt
    },
    async getUserData() {
      try {
        const response = await getUser()
        this.userData = response.data
      }
      catch (error) {
        this.sessionIsExpired = true
        setTimeout(() => {
          this.logout()
          return { status: 'error', message: 'La sesión ha expirado' }
        }, 3000)
      }
    },
    async login(email: string, password: string) {
      try {
        const { data } = await loginByEmail(email, password)
        this.userJwt = data.jwtToken
        localStorage.setItem('userJwt', this.userJwt)
        this.setHeaders()
        this.getUserData()
      }
      catch (error: any) {
        console.log(error.response.data.message)
        return { status: 'error', message: error.response.data.message }
      }
    },
    async signIn(email: string, password: string) {
      try {
        await createUser(email, password)
      }
      catch (error: any) {
        const errorMsj = error.response.data.message.split('user validation failed: email:')
        return { status: 'error', message: errorMsj }
      }
    },
    logout() {
      localStorage.removeItem('userJwt')
      window.location.replace('/')
    },
  },
})

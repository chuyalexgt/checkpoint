/* eslint-disable no-console */
import { defineStore } from 'pinia'
import { loginByEmail } from '~/api/user'
import type { mainStore } from '~/interfaces/mainStore'

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () =>
    ({
      authSuccess: false,
      userJwt: '',
    } as mainStore),

  actions: {
    async login(email: string, password: string) {
      try {
        const { data } = await loginByEmail(email, password)
        this.userJwt = data.jwtToken
        localStorage.setItem('userJwt', this.userJwt)
      }
      catch (error: any) {
        console.log(error.response.data.message)
        return { status: 'error', message: error.response.data.message }
      }
    },
    async signIn(email: string, password: string) {
      try {
        console.log(email, password)
        return { status: 'lo que sea' }
      }
      catch (error) {
        return { status: 'error', message: error }
      }
    },
  },
})

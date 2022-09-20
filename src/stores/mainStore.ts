/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
import { defineStore } from 'pinia'
import type { mainStore } from '~/interfaces/mainStore'

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () =>
    ({
      authSuccess: false,
    } as mainStore),

  actions: {
    async login(email: string, password: string) {
      try {
        // throw 'usuario pendejo'
        console.log(email, password)
        return { status: 'lo que sea' }
      }
      catch (error) {
        return { status: 'error', message: error }
      }
    },
    async signIn(email: string, password: string) {
      try {
        // throw 'usuario pendejo e inexistente'
        console.log(email, password)
        return { status: 'lo que sea' }
      }
      catch (error) {
        return { status: 'error', message: error }
      }
    },
  },
})

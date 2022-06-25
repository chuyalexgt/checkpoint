import { defineStore } from 'pinia'
import type { mainStore } from '~/interfaces/mainStore'

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () =>
    ({
      selectedMembership: 'basic',
    } as mainStore),

  actions: {

  },
})

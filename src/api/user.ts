import { api } from '~/boot'

const baseUrl = 'user'

const loginByEmail = async (email: string, password: string): Promise<any> => {
  const data = await api.post(`/api/v1/${baseUrl}/login`, { email, password })
  return data
}

const createUser = async (email: string, password: string): Promise<any> => {
  const data = await api.post(`/api/v1/${baseUrl}/create`, { email, password })
  return data
}

const getUser = async (): Promise<any> => {
  const data = await api.get(`/api/v1/${baseUrl}/get`)
  return data
}

export { loginByEmail, createUser, getUser }

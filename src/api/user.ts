import { api } from '~/boot'

const baseUrl = 'user'

const loginByEmail = async (email: string, password: string): Promise<any> => {
  const data = await api.post(`/api/v1/${baseUrl}/login`, { email, password })
  return data
}

export { loginByEmail }

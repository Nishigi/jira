import { User } from "screens/project-list/search-panel"
// 真实环境中,如果使用firebase这种第三方auth服务,本文件就不需要开发者开发
const localStorageKey = '__auth_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const hanldeUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '')
  return user
}

export const register = (params: { username: string, password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(async res => {
    if (res.ok) {
      return hanldeUserResponse(await res.json())
    } else {
      return Promise.reject(res)
    }
  });
}
export const login = (params: { username: string, password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(async res => {
    if (res.ok) {
      return hanldeUserResponse(await res.json())
    } else {
      return Promise.reject(params)
    }
  });
}


export const logout = async () => window.localStorage.removeItem(localStorageKey)
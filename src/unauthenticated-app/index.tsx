import { useState } from "react"
import { LoginScreens } from "screens/login"
import { RegisterScreens } from "./register"

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false)

  return <div>
    {
      isRegister ? <RegisterScreens /> : <LoginScreens />
    }
    <button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</button>
  </div>
}
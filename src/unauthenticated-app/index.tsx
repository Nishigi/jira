import { Button, Card } from "antd"
import { useState } from "react"
import { LoginScreens } from "./login"
import { RegisterScreens } from "./register"

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false)

  return <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Card>
      {isRegister ? <RegisterScreens /> : <LoginScreens />}
      <Button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</Button>
    </Card>
  </div>
}
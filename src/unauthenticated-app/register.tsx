import { Form, Input } from "antd"
import { useAuth } from "context/auth-context"
import React from "react"
import { LongButton } from "unauthenticated-app"


export const RegisterScreens = () => {
  const { register } = useAuth()

  const handleSubmit = (value: { username: string, password: string }) => {
    register(value)
  }
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name={'username'} rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="用户名" type="text" id={'username'} />
      </Form.Item>
      <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
        <Input placeholder="密码" type="password" id={'password'} />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType={'submit'} type={"primary"}>注册</LongButton>
      </Form.Item>
    </Form >
  )
}
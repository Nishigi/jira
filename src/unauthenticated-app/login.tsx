import { useAuth } from "context/auth-context"
import React from "react"
import { Button, Form, Input } from "antd";

export const LoginScreens = () => {
  const { login, user } = useAuth()

  const handleSubmit = (value: { username: string, password: string }) => {
    login(value)
  }
  return (
    <Form onFinish={handleSubmit}>
      {
        user ? <div> 登录成功,用户名:{user?.name}</div> : ''
      }
      <Form.Item name={'username'} rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="用户名" type="text" id={'username'} />
      </Form.Item>
      <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
        <Input placeholder="密码" type="password" id={'password'} />
      </Form.Item>
      <Form.Item>
        <Button htmlType={'submit'} type={"primary"}>登录</Button>
      </Form.Item>
    </Form >
  )
}
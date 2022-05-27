import { ProjectListScreen } from "screens/project-list"
import React from "react";
import { useAuth } from "context/auth-context";
import { Button } from "antd";
export const AuthenticatedApp = () => {
  const { logout } = useAuth()
  return <div>
    <Button onClick={() => logout()}>退出</Button>
    <ProjectListScreen />
  </div>
}
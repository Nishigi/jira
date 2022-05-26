import { Table } from 'antd';
import React from 'react';
import { User } from './search-panel';

interface Project {
  id: string,
  name: string,
  personId: string,
  title: string,
  organization: string
}

interface ListProps {
  list: Project[],
  users: User[]
}
export const List = ({ list, users }: ListProps) => {
  return <Table pagination={false} columns={
    [{
      title: '名称',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name)
    }, {
      title: '负责人',
      dataIndex: 'person',
      render(value, project) {
        return <span>{users.find(user => user.id === project.personId)?.name || '未知'}</span>
      }
    }]
  } dataSource={list}></Table>
};

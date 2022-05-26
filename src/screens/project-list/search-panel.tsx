import { Input, Select } from 'antd';
import React from 'react';

export interface User {
  id: string,
  name: string,
  email: string,
  title: string,
  organization: string,
  token: string
}
interface SearchPanelProps {
  param: {
    name: string,
    personId: string
  },
  setParam: (param: SearchPanelProps['param']) => void,
  users: User[]
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {

  return (
    <form>
      <div>
        <Input
          type="text"
          value={param.name}
          onChange={e => setParam({ ...param, name: e.target.value })}
        />
        <Select value={param.personId} onChange={val => setParam({ ...param, personId: val })}>
          <Select.Option value={''}>负责人</Select.Option>
          {
            users.map(user => <Select.Option key={user.id} value={user.id} > {user.name}</Select.Option>)
          }
        </Select>
      </div>
    </form>
  );
};

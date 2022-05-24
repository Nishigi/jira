import React, { useEffect, useState } from "react";

import { List } from "./list";
import { SearchPanel } from './search-panel'
import { checkUrl, useDebounce, useMount } from "utils/index";
import { useHttp } from "utils/http";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const debounceParam = useDebounce(param, 500)
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = useHttp()
  useEffect(() => {
    client('projects', { data: checkUrl(debounceParam) }).then(setList);
  }, [debounceParam]); // eslint-disable-line
  useMount(() => {
    client('users').then(setUsers);
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
}
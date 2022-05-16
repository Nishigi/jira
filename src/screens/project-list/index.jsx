import React, { useEffect, useState } from "react";

import { List } from "./list";
import { SearchPanel } from './search-panel'
import { checkUrl, useDebounce, useMount } from "utils/index";

const qs = require('qs');
const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 2000)
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(checkUrl(debounceParam))}`).then(async res => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParam]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
}
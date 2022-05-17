import React from 'react';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';
import { TsReactTest } from "screens/try-use-array";

function App() {
  return (
    <div className="App">
      <ProjectListScreen></ProjectListScreen>
      <TsReactTest></TsReactTest>
    </div>
  );
}

export default App;

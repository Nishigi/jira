import React from 'react';
import './App.css';
// import { ProjectListScreen } from 'screens/project-list';
import { LoginScreens } from 'screens/login';
// import { TsReactTest } from "screens/try-use-array";


function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen></ProjectListScreen>
      <TsReactTest></TsReactTest> */}
      <LoginScreens></LoginScreens>
    </div>
  );
}

export default App;

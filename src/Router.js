import React from "react";
import { Scene, Router, Stack } from "react-native-router-flux";

import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Stack key="auth" hideNavBar>
          <Scene
            key="login"
            hideNavBar={false}
            component={LoginForm}
            title="Please Login"
          />
        </Stack>

        <Scene key="main" hideNavBar>
          <Scene
            hideNavBar={false}
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;

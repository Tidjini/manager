import React from "react";
import { Scene, Router, Stack, Actions } from "react-native-router-flux";

import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

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

        <Scene key="main" hideNavBar initial>
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            hideNavBar={false}
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
            initial
          />
          <Scene
            hideNavBar={false}
            key="employeeCreate"
            component={EmployeeCreate}
            title="Add Employee"
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;

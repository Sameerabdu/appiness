import React from "react";

import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Login from "../Components/Login";

const ProjectRoute = () => {
  return (
    <Switch>
      
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/" component={Login} />
    </Switch>
  );
};

export { ProjectRoute };

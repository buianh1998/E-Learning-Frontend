import React from "react";
import Home from "../../pages/client/Home/Home";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Header from "../../components/Header";
import Course from "../../pages/client/Course/Course";
import Detail from "../../pages/client/Detail/Detail";
export default function ClientPage() {
  const match = useRouteMatch();
  return (
    <div>
      {/* <Header></Header> */}
      <Switch>
        <Route path={match.url} exact component={Home}></Route>
        <Route path="/course" component={Course}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Redirect to="/" from="/"></Redirect>
      </Switch>
    </div>
  );
}

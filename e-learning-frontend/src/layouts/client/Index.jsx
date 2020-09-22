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
import Footer from "../../components/Footer";
export default function ClientPage() {
  const match = useRouteMatch();
  console.log(`${match.url}course`);
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path={`${match.url}course`} exact component={Course}></Route>
          <Route
            path={`${match.url}course/:id`}
            exact
            component={Detail}
          ></Route>
          <Route path={`${match.url}`} exact component={Home}></Route>

          <Redirect to="/"></Redirect>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

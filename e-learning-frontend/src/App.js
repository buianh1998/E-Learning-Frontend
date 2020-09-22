import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import ClientPage from "./layouts/client/Index";
import AdminPage from "./layouts/admin/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ClientPage}></Route>
          <Route path="/admin" exact component={AdminPage}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

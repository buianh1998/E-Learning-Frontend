import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import ClientPage from "./layouts/client/Index";
import AdminPage from "./layouts/admin/Index";
import Course from "./pages/client/Course/Course";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/client/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/course" component={Course}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

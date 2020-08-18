import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Careers from "./pages/Careers/Careers";
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
    <Navigation/>
    <Switch>
      <Route path="/" exact>
        <Homepage/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/blog">
        <Blog/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/careers">
        <Careers/>
      </Route>
      <Redirect to="/"/>
    </Switch>
    </>
  );
}

export default App;

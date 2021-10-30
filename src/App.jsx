import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Footer from "./Footer";
import TermPage from "./TermPage";
import { Switch, Route, Redirect } from "react-router-dom";
import *

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/reactwebsite" component={Home} />
        <Route exact path="/reactwebsite/about" component={About} />
        <Route exact path="/reactwebsite/service" component={Service} />
        <Route exact path="/reactwebsite/contact" component={Contact} />
        <Route exact path="/reactwebsite/termpage" component={TermPage} />
        <Redirect to="/reactwebsite" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

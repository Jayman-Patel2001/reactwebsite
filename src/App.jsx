import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Footer from "./Footer";
import TermPage from "./TermPage";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/termpage" component={TermPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

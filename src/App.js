import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Button from "./components/Button"
import Footer from "./components/Footer"


function App() {



  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
            <Button />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

export default App;

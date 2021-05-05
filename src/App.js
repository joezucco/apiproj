import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer"
import Fact from "./components/Fact";


function App() {

  const url =
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=200";
  const [catFacts, setCatFacts] = useState([])
  
  const getCatFacts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCatFacts(data)
  }

  useEffect(() => {getCatFacts()}, []) 


  
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <Header />
          </div>
        </div>
      </section>
      <main>
        <Switch>
          <Route exact path="/">
            <Home catFacts={catFacts} />
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

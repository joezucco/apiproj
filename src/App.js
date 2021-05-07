import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer"


function App() {

  const url =
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=300";
  const [catFacts, setCatFacts] = useState([])
  
  const getCatFacts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCatFacts(data)
  }

  useEffect(() => {getCatFacts()}, []) 


  
  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route exact path="/">
            <div id="wrapper">
              <Home catFacts={catFacts} />
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        
      </main>
    </div>
  );
}

export default App;

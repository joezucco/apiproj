import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import "./components/About"

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
      <div className="site">
        <Header />

        <main className="site">
          <Switch>
            <Route exact path="/">
              <Home catFacts={catFacts} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>

        {/* <Footer className="foot" /> */}
      </div>
    </div>
  );
}

export default App;

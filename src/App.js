import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer"
import Plant from "./components/Plant";


function App() {

//  const apiKey = "Lscpny7Db7m8VKIRmvuWln_plcl53QP3nflws5Z0MLs";
// const page = Math.floor(Math.random() * 1000 + 1);
// const id = Math.floor(Math.random() * 1000 + 1);
// const url = `https://trefle.io/api/v1/plants?token=${apiKey}&page=${page}`;
// const proxyUrl = "https://shielded-sea-45679.herokuapp.com/";

//   const [plant, getPlant] = useState([])
  
//   const getPlantInfo = async () => {
//     const response = await fetch(proxyUrl + url)
//     const data = await response.json()
//     console.log(data)
//   }
  
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
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

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./layout/Navbar";
import "./App.css";
import Home from "./pages/Home";
import SwipableCons from "./pages/SwipableCons";

function App() {
  const [light, setlight] = useState("light");
  const [con, setCon] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      setCon(res.data);
    });
    if (light === "light")
      document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    else document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
  }, []);

  const toggleTheme = () => {
    if (light === "light") {
      setlight("dark");
      document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
    } else {
      setlight("light");
      document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    }
  };

  return (
    <Router>
      <Navbar light={light} toggleTheme={toggleTheme} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home light={light} con={con} />}
        />
        <Route
          exact
          path="/details/:code"
          component={props => (
            <SwipableCons {...props} light={light} con={con} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;

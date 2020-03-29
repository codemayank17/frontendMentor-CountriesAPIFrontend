import React, { useState, useEffect } from "react";
import Details from "../components/Details";
import axios from "axios";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
export default function SwipableCons({ light, match }) {
  const [con, setCon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("AFG");
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      setCon(res.data);
      setCode(match.params.code);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p></p>
      ) : (
        <BindKeyboardSwipeableViews
          enableMouseEvents
          index={con.findIndex(c => c.alpha3Code === code)}
        >
          {con.map(cons => (
            <div>
              <Details light={light} con={cons} />
            </div>
          ))}
        </BindKeyboardSwipeableViews>
        // <Details light={light} con={con.find(c => c.alpha3Code === code)} />
      )}
    </div>
  );
}

import React from "react";
import ConCard from "./ConCard";
export default function ConCards({ cons, light }) {
  return (
    <div className="row">
      {cons.map(con => (
        <ConCard key={con.alpha3Code} con={con} light={light} />
      ))}
    </div>
  );
}

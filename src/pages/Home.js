import React, { useState } from "react";
import ConCards from "../components/ConCards";
import Filter from "../components/Filter";
export default function Home({ con, light }) {
  const [region, setRegion] = useState("All");
  const [search, setSearch] = useState("");

  let filtered = con;

  if (search !== "")
    filtered = filtered.filter(cont => {
      const lc = cont.name.toLowerCase();
      const filter = search.toLowerCase();
      return lc.includes(filter);
    });

  if (region !== "All")
    filtered = filtered.filter(cont => cont.region === region);

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <Filter light={light} setRegion={setRegion} setSearch={setSearch} />
      <ConCards cons={filtered} light={light} />
    </div>
  );
}

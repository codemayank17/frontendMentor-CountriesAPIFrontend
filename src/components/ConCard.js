import React from "react";
import { Link } from "react-router-dom";
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function ConCard({ con, light }) {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 mb-4">
      <Link to={`/details/${con.alpha3Code}`}>
        <div className={`card card-${light}`} style={{ height: "400px" }}>
          <img
            src={con.flag}
            className="card-img-top"
            alt="..."
            style={{ width: "100%", height: "200px" }}
          />

          <div className="card-body">
            <Link
              className={`card-title text${light}`}
              style={{ fontWeight: "bold", fontSize: "18px" }}
              to={`/details/${con.alpha3Code}`}
            >
              {con.name}
            </Link>
            <p>
              <span
                className={`text${light}`}
                style={{ fontWeight: "bold", fontSize: "16px" }}
              >
                Population :
              </span>{" "}
              <span className={`secondary-text`}>
                {numberWithCommas(con.population)}
              </span>
            </p>
            <p>
              <span
                className={`text${light}`}
                style={{ fontWeight: "bold", fontSize: "16px" }}
              >
                Region :
              </span>{" "}
              <span className={`secondary-text`}>{con.region}</span>
            </p>

            <p>
              <span
                className={`text${light}`}
                style={{ fontWeight: "bold", fontSize: "16px" }}
              >
                Capital :
              </span>{" "}
              <span className={`secondary-text`}>{con.capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

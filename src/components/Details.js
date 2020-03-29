import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function Details({ light, con }) {
  return (
    <div className="row my-5 unselectable mx-2">
      <div className="col-12">
        <Link
          className={`btn formControl form-group card-${light} text${light}`}
          to="/"
        >
          <i class="fas fa-arrow-left"></i> Back
        </Link>
      </div>
      <img src={con.flag} alt="..." className="col-md-5" />

      <div className="col-md-7 p-4">
        <h5 style={{ fontWeight: "bold" }} className={`text${light}`}>
          {con.name}
        </h5>
        <div className="row">
          <div className="col-md-6">
            <span>
              <span
                className={`text${light}`}
                style={{ fontWeight: "normal", fontSize: "16px" }}
              >
                Native Name :
              </span>{" "}
              <span className={`secondary-text md-4`}>
                {con.altSpellings[1]}
              </span>
            </span>
            <br />
            <span>
              <span
                className={`text${light}`}
                style={{ fontWeight: "normal", fontSize: "16px" }}
              >
                Population :
              </span>{" "}
              <span className={`secondary-text md-4`}>
                {numberWithCommas(con.population)}
              </span>
            </span>
            <br />
            <span>
              <span
                className={`text${light}`}
                style={{ fontWeight: "normal", fontSize: "16px" }}
              >
                Region :
              </span>{" "}
              <span className={`secondary-text md-4`}>{con.region}</span>
            </span>
            <br />
            <span>
              <span
                className={`text${light}`}
                style={{ fontWeight: "normal", fontSize: "16px" }}
              >
                Sub Region :
              </span>{" "}
              <span className={`secondary-text md-4`}>{con.subregion}</span>
            </span>
            <br />
            <span>
              <span
                className={`text${light}`}
                style={{ fontWeight: "normal", fontSize: "16px" }}
              >
                Capital :
              </span>{" "}
              <span className={`secondary-text md-4`}>{con.capital}</span>
            </span>
            <br />
          </div>
          <div className="col-md-6">
            <span>
              <span
                className={`text${light}`}
                style={{ fontWeight: "normal", fontSize: "16px" }}
              >
                Top Level Domain :
              </span>{" "}
              <span className={`secondary-text lead`}>
                {con.topLevelDomain}
              </span>
            </span>
            <br />
            <span>
              <span
                className={`text${light}`}
                style={{ fontWeight: "normal", fontSize: "16px" }}
              >
                Currencies :
              </span>{" "}
              <span className={`secondary-text`}>
                {con.currencies.map(c => c.name).join(", ")}
              </span>
            </span>
            <br />
            <span>
              <span
                className={`text${light}`}
                style={{ fontWeight: "normal", fontSize: "16px" }}
              >
                Languages :
              </span>{" "}
              <span className={`secondary-text`}>
                {con.languages.map(c => c.name).join(", ")}
              </span>
            </span>
            <br />
          </div>
          <div className="col-md-6">
            <span>
              <span
                className={`text${light}`}
                style={{ fontWeight: "normal", fontSize: "16px" }}
              >
                Border Countries :
              </span>{" "}
              {con.borders.map(c => (
                <span
                  className={`formControl form-group card-${light} text${light} px-2 m-1`}
                  style={{ fontWeight: "normal", fontSize: "14px" }}
                >
                  {c}
                </span>
              ))}
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

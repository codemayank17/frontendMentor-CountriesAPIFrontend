import React, { useState } from "react";

export default function Filter({ light, setRegion, setSearch }) {
  return (
    <div className="row px-3">
      <div className="input-field px-0 col-sm-12 col-md-6 col-lg-4">
        <div className={`input-group mb-3 card-${light}`}>
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <input
            placeholder={"Search"}
            type="text"
            className={`form-control formControl text${light} card-${light}`}
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={`form-group ml-auto col-md-3 card-${light}`}>
        <select
          className={`form-control card-${light} formControl text${light}`}
          id="exampleFormControlSelect1"
          onChange={e => {
            setRegion(e.target.value);
          }}
        >
          <option className={`text${light}`} value="All">
            All
          </option>
          <option className={`text${light}`} value="Africa">
            Africa
          </option>
          <option className={`text${light}`} value="Americas">
            Americas
          </option>
          <option className={`text${light}`} value="Asia">
            Asia
          </option>
          <option className={`text${light}`} value="Europe">
            Europe
          </option>
          <option className={`text${light}`} value="Oceania">
            Oceania
          </option>
        </select>
      </div>
    </div>
  );
}

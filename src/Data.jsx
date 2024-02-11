import React, { useState } from "react";
import { useEffect } from "react";
const Data = () => {
  const [newdata, setnewdata] = useState([]);
  const datafetch = async () => {
    try {
      const data = await fetch(
        "https://data.covid19india.org/v4/min/data.min.json"
      );
      const actualdata = await data.json();
      console.log(actualdata.AN.total);
      setnewdata(actualdata.AN.total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  return (
    <div className="mycss">
      <h1 className="txtcss2">🔴Live</h1>
      <h1 className="txtcss2">Covid19 Updates</h1>
      <div className="mycss3">
        <div className="bg-blue-600 mycss2">
          <h1 className="txtclass">Total Confirmed</h1>
          <h2 className="txtclass">{newdata.confirmed}</h2>
        </div>

        <div className="bg-green-500 mycss2">
          <h1 className="txtclass">Total recovered</h1>
          <h2 className="txtclass">{newdata.recovered}</h2>
        </div>

        <div className="bg-yellow-500 mycss2">
          <h1 className="txtclass">Total Vaccinated1</h1>
          <h2 className="txtclass">{newdata.vaccinated1}</h2>
        </div>

        <div className="bg bg-orange-500 mycss2">
          <h1 className="txtclass">Total death</h1>
          <h2 className="txtclass">{newdata.deceased}</h2>
        </div>

        <div className="bg-blue-600 mycss2">
          <h1 className="txtclass">Total tested</h1>
          <h2 className="txtclass">{newdata.tested}</h2>
        </div>

        <div className="bg-yellow-500 mycss2">
          <h1 className="txtclass">Total Vaccinated2</h1>
          <h2 className="txtclass">{newdata.vaccinated2}</h2>
        </div>
      </div>
    </div>
  );
};

export default Data;

import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import InfoBox from './InfoBox';
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');


  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) =>(
          {
            name: country.country,
            value: country.countryInfo.iso2,
          }
        ));
        setCountries(countries)
      });
    };
    getCountriesData();
  }, []);

  const onCountryChange =  (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className = "app">
      <div className="app__header">
      <h1> Covid - 19 Tracker </h1> 
        <FormControl className = "app_dropdown">
          <Select variant = "outlined" onChange={onCountryChange} value = {country} >
            <MenuItem value = "worldwide" > Worldwide < /MenuItem>
            {
              countries.map(country => (
                <MenuItem value = {country.value} >{country.name}< /MenuItem> 
              ))
            }

            {/* <MenuItem value = "worldwide" > Worldwide < /MenuItem> 
            <MenuItem value = "worldwide" > Option 2 < /MenuItem> 
            <MenuItem value = "worldwide" > option3 < /MenuItem> 
            <MenuItem value = "worldwide" > Option4 < /MenuItem>  */}
          </Select>

        </FormControl>
      </div>

      <div className="app__stats"></div>
       <InfoBox title="Coronavirus cases" cases={123} totlal={2000}/>

       <InfoBox title="Recovered" cases={123} total={3000}/>

       <InfoBox title="Deaths" cases={123} total={4000}/>
    </div>
  );
}

export default App;
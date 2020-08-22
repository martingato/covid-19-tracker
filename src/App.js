import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState(["Portugal", "Spain", "France", "Ireland", "UK", "USA"]);
  return (
    <div className = "app">
      <div className="app__header">
      <h1> Covid - 19 Tracker </h1> 
        <FormControl className = "app_dropdown">
          <Select variant = "outlined" value = "abc" >

            {
              countries.map(country => (
                <MenuItem value = {country} >{country}< /MenuItem> 
              ))
            }

            {/* <MenuItem value = "worldwide" > Worldwide < /MenuItem> 
            <MenuItem value = "worldwide" > Option 2 < /MenuItem> 
            <MenuItem value = "worldwide" > option3 < /MenuItem> 
            <MenuItem value = "worldwide" > Option4 < /MenuItem>  */}
          </Select>

        </FormControl>
      </div>
       
    </div>
  );
}

export default App;
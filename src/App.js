import React, { useState } from "react";
import {
  MenuItem, 
  FormControl,
  Select,
} from "@material-ui/core";
import './App.css';

function App() {
const [countries, setCountries] = useState(["USA", "UK", "Japan"]);
  //state=how to write variables in react

  return (
    <div className="App">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" vlaue="abc" >

            {countries.map((country) => 
              <MenuItem value={country}>{country}</MenuItem>
            )}


           {/*} <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">Option n</MenuItem> */}


          </Select>


        </FormControl>
      </div>
     

      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* Infobox */}
      {/* Infobox */}
      {/* Infobox */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}


    </div>
  );
}

export default App;

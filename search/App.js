import React from 'react'
import './App.css'
import { useState } from 'react';
var data = require("./Search.json");

const App = () => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
      };

      const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
      };
  return (
    <div className="App">
     <h1>Search item</h1>
     <div className="search-container">

     <div className="search-inner">

     <input type='text' value={value} onChange={onChange}/>
     <button onClick={() => onSearch(value)}>search</button>

     </div>

     <div className="dropdown">

        {data
        .filter((item)=>{
            const searchTerm = value.toLowerCase();
            const fullName = item.full_name.toLowerCase();
            return(
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm

            )
        })
        
        
        
        
        
        .map((item)=>(
            <div key={item.full_name}
            onClick={() => onSearch(item.full_name)}
            className="dropdown-row">
            {item.full_name}
            </div>
        )
          
        )}
     </div>
     </div>
       
        

   


    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import './App.css';
import SideNav from "./containers/SideNav/SideNav";
import BeerList from './components/BeerList/BeerList';
//import beers from "./assets/data/beers";

const App = () => {

  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterABV, setFilterABV] = useState("");
  const [filterClassic, setFilterClassic] = useState("");
  const [filterPH, setFilterPH] = useState("");

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?per_page-40${searchTerm}${filterABV}${filterClassic}`
    fetch(URL).then(response => {
      return response.json();
    }).then(beers => {
      if (filterPH === "filter") {
        setBeers(beers.filter(beer => beer.ph < 4))
      } else {
        setBeers(beers)
      }
    })
  }, [searchTerm, filterClassic, filterABV, filterPH])

  const handleClick = (filter, setFilter, filterTerm) => {
    if (filter === "") {
      setFilter(filterTerm)
    } else if (filter === filterTerm) {
      setFilter("")
    }
  }

  const handleInput = event => {
    if (event.target.value === ""){
      setSearchTerm("");
    } else {
      const formattedInput = event.target.value.toLowerCase().replace(" ", "_");
      console.log(formattedInput)
      setSearchTerm("&beer_name=" + formattedInput)
    }
  }

  const searchABV = () => {
    handleClick(filterABV, setFilterABV, "&abv_gt=6")
  }

  const searchClassic = () => {
    handleClick(filterClassic, setFilterClassic, "&brewed_before=01-2010")
  }

  const searchPH = () => {
    handleClick(filterPH, setFilterPH, "filter")
  }
 
  return (   <div className="App">
      <span className="sideNav">
        <SideNav searchTerm = {searchTerm} searchABV={searchABV} searchClassic={searchClassic} searchPH={searchPH} handleInput={handleInput}/>
      </span>
      <span className="beerList">
        <BeerList beers = {beers} />
      </span>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import "./SideNav.scss";
//import SearchBar from "../SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";


const SideNav = (props) => {
    const {searchABV, searchClassic, searchPH, handleInput} = props;
    //const [searchTerm, setSearchTerm] = useState('');
    const [ABVTickBox, setABVTickBox] = useState(false)
    const [classicTickBox, setClassicTickBox] = useState(false)
    const [PHTickBox, setPHTickBox] = useState(false)
    
     
    const handleABVFilter = () => {
        setABVTickBox(!ABVTickBox);
        searchABV();        
    }
    const handleClassicFilter = () => {
        setClassicTickBox(!classicTickBox);
        searchClassic();
    }
    const handlePHFilter = () => {
        setPHTickBox(!PHTickBox);
        console.log(PHTickBox)
        searchPH();
    }
        /*console.log("handlingClick", tickBox)
        if(tickBox === false) {
            tickbox = "ic:baseline-check-box-outline-blank"
            //tickBox === true;
            console.log("handlingClick", tickBox)
        } else if(tickBox === true) {
            tickbox = "ic:outline-check-box"
            //tickBox === false;
            console.log("handlingClick", tickBox)
        }
        return tickbox
    } */

    return(
        <nav className="nav">
            <form className="search-box">                
                <input type="text" name="search" onInput={handleInput} className="search-box__input"/>
            </form>      
            <Filters handleABVFilter={handleABVFilter} handleClassicFilter={handleClassicFilter} handlePHFilter={handlePHFilter} ABV={ABVTickBox} classic={classicTickBox} PH={PHTickBox}/>
        </nav>
    )
}
export default SideNav;

//<span class="iconify" data-icon="ic:baseline-check-box-outline-blank"></span>
//<span class="iconify" data-icon="ic:outline-check-box"></span>

/*
const [ABVTickBox, setABVTickBox] = useState(false)
    const [classicTickBox, setClassicTickBox] = useState(false)
    const [PHTickBox, setPHTickBox] = useState(false) 
    

    const handleInput = event => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
      };
    
      const filteredBeers= beersArr.filter(beer => {
        const beerName = beer.name.toLowerCase();
    
        return beerName.includes(searchTerm) //&& beer.strAlbumThumb;
      });

      */

//<SearchBar searchTerm={searchTerm} handleInput={handleInput}/>
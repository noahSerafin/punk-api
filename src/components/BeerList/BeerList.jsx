import React from "react";
import './BeerList.scss';

const BeerList = (props) => {

    const {beers} = props;
    
    console.log(beers)

    const BeerTiles= beers.map((beer) => {
        return (
            <div className="beerTile">                
                <h4>{beer.name}</h4>
                <p>{beer.desciption}</p>              
                <img className="beerPic" src={beer.image_url} alt =""/>
                <p>ABV: {beer.abv}%</p>  
                <p>PH: {beer.ph}</p>  
            </div>
        )
    })
    
    return (
        BeerTiles
    )    
}

export default BeerList;
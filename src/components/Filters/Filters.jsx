import React from "react";
import box from "../../assets/images/Capture.PNG";
import tick from "../../assets/images/tick.PNG";
   
const Filters = (props) => {
    const {handleABVFilter, handlePHFilter, handleClassicFilter, ABV, classic, PH} = props
    let ABVImg = box
    if(ABV){
        ABVImg = tick
    } else {
        ABVImg = box
    }
    let ClassicImg = box
    if(classic){
        ClassicImg = tick
    } else {
        ClassicImg = box
    }
    let PHImg = box
    if(PH){
        PHImg = tick
        console.log(PH)
    } else {
        PHImg = box
    }

   return(  
       <>      
            <div className="filter">
                <p>High ABV (6.0%)</p>
                <img src={ABVImg} alt="" className="iconify" onClick={handleABVFilter}/>
            </div>
            <div className="filter">
                <p>Classic Range</p>
                <img src={ClassicImg} alt="" className="iconify" onClick={handleClassicFilter}/>
            </div>
            <div className="filter">
                <p>Acidic (ph under 4)</p>
                <img src={PHImg} alt="" className="iconify" onClick={handlePHFilter} />
            </div>        
        </>
    )
}
export default Filters;

//<span onClick={handleFilter} className="iconify" data-icon={icon}></span>

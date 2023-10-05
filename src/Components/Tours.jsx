import React  from "react";
import Card from "./card";
import "./Tours.css"

function Tours({tours,removeTour}){
    
    return (
     <div className="main">
        <div className="heading">
            <h2>Plan with Love</h2>
        </div>
        <div className="cards">
            {
                tours.map( (tour)=>{
                     return <Card {...tour} removeTour={removeTour}></Card>
                } )

            }
        </div>
     </div>
    );
}
export default Tours;
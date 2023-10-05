import React, { useState } from "react";
import Tours from "./Components/Tours";
import data from "../src/data";
function App() {
  const[tours,setTours]=useState(data);
  function RemoveTourHandeler(id){
     const newTours=tours.filter((tour)=>{
      return tour.id!==id
     })
     setTours(newTours);
  }
  const allCardsLenght=tours.length===0;
  return (
<>
    { allCardsLenght  ? 
     (
      <div className="refresh main">
        <p>Refresh the Page</p>
        <button onClick={()=>setTours(data)}>Refresh</button>
      </div>
     )
      :
     ( <Tours tours={tours} removeTour={RemoveTourHandeler}/>)
    }
  </>
  );
}

export default App;

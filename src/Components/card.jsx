import { useState } from "react";
import "./card.css";

function Card({ id, name, image, price, info, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}...`;
  function readMoreHandeler() {
    setReadMore(readMore ? false : true);
  }
  //   function handelRemoveCard(){
  //     return removeTour(id);
  //   }
  return (
    <div className="card">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <div className="price">{"₹" + price}</div>
        <div className="place">{name}</div>
      </div>
      <div className="description">
        {description}
        <span className="readMore" onClick={readMoreHandeler}>
          {readMore ? "show less" : "read more"}
        </span>
      </div>
      <div className="btn">
        <button onClick={() => removeTour(id)}>Not Intrested</button>
      </div>
    </div>
  );
}
export default Card;

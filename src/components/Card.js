import React,{useState} from "react";
import pic from "../assets/2018-12-08-16-01-13.jpeg";

const Card = (props) => {
    // const [judul, setJudul] = useState("Pisang")
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={pic} className="card-img-top" alt="pic" />
      <div className="card-body">
        <h5 className="card-title">{props.judul}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;

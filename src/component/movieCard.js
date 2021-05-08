import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from "./starRating";
const MovieCard = ({movieCard}) => {
  
  return (
    <div style={{ margin: "50px", paddingTop: "20px" }}>
      <Card style={{ width: "18rem" ,borderStyle:'outset'}}>
        <Card.Img variant="top" src={movieCard.src}  style={{ height: "25rem", width:'18rem' }} />
        {/* <StarRating rate={movieCard.rating} /> */}
        <span>{"".padStart(movieCard.rating,"⭐")}</span>
        <Card.Body style={{ height: "240px" }}>
          <Card.Title>{movieCard.title}</Card.Title>
          <Card.Text style={{ fontSize: "14px", textAlign: "left" }}>
            {movieCard.text}
            
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
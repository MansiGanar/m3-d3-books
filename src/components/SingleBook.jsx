import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

function SingleBook(props) {
  // state = {
  //   selected: false,
  // };

  const [selected, setselected] = useState(false);

  return (
    <>
      <Card
        className="BookCards"
        onClick={() => setselected(!selected)}
        style={{
          border: selected ? "3px solid red" : "1px solid black",
          cursor: "pointer",
        }}
      >
        <Card.Img
          className=" ml-5 mt-2"
          style={{ width: "150px" }}
          variant="top"
          src={props.book.img}
        />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={props.book.asin} />}
    </>
  );
}
export default SingleBook;

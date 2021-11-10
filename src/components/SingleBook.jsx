import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selectedBook: false,
  };
  render() {
    return (
      <Card>
        <Card.Img
          className="d-flex justify-content-center"
          variant="top"
          onClick={() => {
            this.setState({ selectedBook: !this.state.selectedBook });
            console.log(this.state);
          }}
          src={this.props.book.img}
          key={this.props.asin}
          style={{
            cursor: "pointer",
            width: "15rem",
            border: this.state.selectedBook
              ? "3px solid red"
              : "1px solid black",
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Button variant="warning">Buy</Button>
        </Card.Body>
      </Card>
    );
  }
}

/* const SingleBookCard = (props) => {
  return (
    <Card>
      <Card.Img
        className="d-flex justify-content-center"
        variant="top"
        src={props.book.img}
        key={props.asin}
        style={{ width: "15rem" }}
      />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Button variant="warning">Buy</Button>
      </Card.Body>
    </Card>
  );
}; */
export default SingleBook;

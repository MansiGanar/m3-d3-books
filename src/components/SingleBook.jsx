import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selectedBook: false,
  };
  render() {
    return (
      <Card
        className="BookCards"
        onClick={() => {
          this.setState({ selectedBook: !this.state.selectedBook });
          console.log(this.state);
        }}
        style={{
          cursor: "pointer",
          width: "15rem",
          border: this.state.selectedBook ? "3px solid red" : "1px solid black",
        }}
      >
        <Card.Img
          className=" ml-5 mt-2"
          style={{ width: "150px" }}
          variant="top"
          src={this.props.book.img}
          key={this.props.asin}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;

import { Col, Container, Form, Row } from "react-bootstrap";
import React from "react";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  state = {
    searchQuery: "",
  };
  render() {
    console.log("Hey there");
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="text-white">Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.book
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={3} key={b.asin}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;

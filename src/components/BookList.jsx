import { Card, Row } from "react-bootstrap";

const BookList = (props) => {
  return (
    <>
      <Row>
        {props.book.map((bookObject) => (
          <Card
            xs={12}
            md={3}
            lg={2}
            style={{ width: "18rem", padding: "20px", margin: "10px" }}
          >
            <Card.Img variant="top" src={bookObject.img} />
            <Card.Body>
              <Card.Title>{bookObject.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
};

export default BookList;

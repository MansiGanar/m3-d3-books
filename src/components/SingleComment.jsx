import { ListGroup, Button } from "react-bootstrap";

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button variant="danger" className="ml-2">
      {" "}
    </Button>
  </ListGroup.Item>
);

export default SingleComment;

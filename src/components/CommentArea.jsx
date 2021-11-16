import { useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useState } from "react";

function CommentArea(props) {
  const [comments, setComments] = useState([]);

  console.log(props.asin);

  const getComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMmEwMDRiYjUzZDAwMTViMTlmODkiLCJpYXQiOjE2MzY2NDUyMzMsImV4cCI6MTYzNzg1NDgzM30.9imStucPc5Idg-i7w6-h5gpwp5LnEBs0dTLoJ0CKBMA",
          },
        }
      );
      console.log(response);
      let comments = await response.json();
      if (comments) {
        setComments(comments);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);
  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <div style={{ color: "red" }} className="p-4">
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
}
export default CommentArea;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBook from "./components/SingleBook";
import book from "./data/fantasy.json";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <h1>Question 1</h1>
      <hr />
      <WarningSign text="Hey there!" />
      <hr />
      <h1>Question 2</h1>
      <hr />
      <MyBadge text="StriveBadge" color="warning" />
      <hr />
      <h1>Question 3</h1>
      <hr />
      <SingleBook book={book[0]} key={book.asin} />
      <hr />
      <h1>Question 4</h1>
      <hr />
      <BookList book={book} />
    </>
  );
}

export default App;

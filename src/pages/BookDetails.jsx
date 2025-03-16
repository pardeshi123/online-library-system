import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./pages.css";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="book-details-container">
    
  <h2>{book.title}</h2>
  <br />
    <Link to="/browse" className="back-link">Back to Browse</Link>
  <p>Author: {book.author}</p>
  <p>Category: {book.category}</p>
  <p><img className="BookDetailsImage" src={book.image} alt={book.title}/> </p>
  <p>Rating: {book.rating}</p>
  
</div>

  );
};

export default BookDetails;

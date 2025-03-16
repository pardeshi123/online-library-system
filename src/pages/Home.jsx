import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery'];

const popularBooks = [
  {
    id: 1,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    image: 'https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    image: 'https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg'
  },
  {
    id: 3,
    title: 'Dune',
    author: 'Frank Herbert',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDDi_QI4QMn46Bc-YN0nWK23L71ha7Gts-Q&s'
  }
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Online Library</h1>
      
      <h2>Book Categories</h2>
      <ul className="categories">
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>

      <h2>Popular Books</h2>
      <div className="book-list">
        {popularBooks.map((book) => (
          <div key={book.id} className="book-card">
            {/* Display the book image */}
            <img src={book.image} alt={book.title} className="BookDetailsImage" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">Author: {book.author}</p>
            <Link to={`/book/${book.id}`} className="details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

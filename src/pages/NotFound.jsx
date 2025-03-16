
import { Link } from "react-router-dom";
import "./pages.css"

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">Page Not Found</h2>
      <p className="not-found-text">Sorry, the page you're looking for does not exist.</p>
      <Link to="/" className="not-found-link">Go Home</Link>
    </div>
  );             
};

export default NotFound;

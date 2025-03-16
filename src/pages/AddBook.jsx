import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import "./pages.css"

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(""); // New state for image link
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author || !category || !image) return;
        dispatch(addBook({ id: Date.now(), title, author, category, image, rating: 0 }));
        navigate("/browse");
    };

    return (
        <form className="add-book-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} /> {/* New Input */}
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook;

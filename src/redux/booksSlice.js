import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books:[
    {
      "id": 1,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "category": "Fiction",
      "description": "A fantasy novel about the journey of Bilbo Baggins.",
      "rating": 4.8,
      "image": "https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "category": "Sci-Fi",
      "description": "A dystopian novel about totalitarian surveillance.",
      "rating": 4.6,
      "image": "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg"
    },
    {
      "id": 3,
      "title": "Sapiens",
      "author": "Yuval Noah Harari",
      "category": "Non-Fiction",
      "description": "A brief history of humankind from evolution to today.",
      "rating": 4.7,
      "image": "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
    },
    {
      "id": 4,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "category": "Fiction",
      "description": "A classic novel about the American dream and decadence.",
      "rating": 4.5,
      "image": "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg"
    },
    {
      "id": 5,
      "title": "Dune",
      "author": "Frank Herbert",
      "category": "Sci-Fi",
      "description": "A science fiction novel set in a distant future on a desert planet.",
      "rating": 4.9,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDDi_QI4QMn46Bc-YN0nWK23L71ha7Gts-Q&s"
    },
    {
      "id": 6,
      "title": "Atomic Habits",
      "author": "James Clear",
      "category": "Self-Help",
      "description": "A book on how small habits lead to remarkable results.",
      "rating": 4.8,
      "image": "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
    },
    {
      "id": 7,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "category": "Fiction",
      "description": "A novel about following one's dreams and destiny.",
      "rating": 4.6,
      "image": "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
      "id": 8,
      "title": "Thinking, Fast and Slow",
      "author": "Daniel Kahneman",
      "category": "Non-Fiction",
      "description": "A book explaining two modes of thinking: fast and slow.",
      "rating": 4.7,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYR19KSVUwzI_OwV7KpPze1bb8bVfSFcudGA&s"
    },
    {
      "id": 9,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "category": "Fiction",
      "description": "A novel on racial injustice in the American South.",
      "rating": 4.9,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/640px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
    },
    {
      "id": 10,
      "title": "The Martian",
      "author": "Andy Weir",
      "category": "Sci-Fi",
      "description": "A story of survival on Mars by an astronaut left behind.",
      "rating": 4.8,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sm4YIUtf-l-w5SRGmYppcrGLQtLxArOxSw&s"
    }
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = { ...action.payload, id: state.books.length + 1 };
      state.books.push(newBook);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;


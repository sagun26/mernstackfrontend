import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../component/Navbar";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/book/${id}`);
      if (response.status === 200) {
        setBook(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };
  
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`http://localhost:3000/book/${id}`);
      if (response.status === 200) {
        alert("Book deleted successfully");
        navigate("/"); // redirect to homepage
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Something went wrong while deleting the book");
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
        {book ? (
          <div className="flex flex-col md:flex-row gap-10">
            {/* Book Cover */}
            <div className="w-full md:w-1/3 flex justify-center">
            <a href="#">
    <img className="p-8 rounded-t-lg" src={book.imageURL ? book.imageURL:"https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg"} 
    alt="Hello"/>
  </a>
  
              </div>

            {/* Book Details */}
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900">{book.bookName}</h1>
              <p className="text-lg text-gray-600 mt-2">
                <span className="font-semibold">Author:</span> {book.author}
              </p>

              {book.genre && (
                <p className="text-gray-600 mt-1">
                  <span className="font-semibold">Price:</span> {book.genre}
                </p>
              )}

              {book.publishedYear && (
                <p className="text-gray-600 mt-1">
                  <span className="font-semibold">Published:</span>{ " "}
                  {book.publishedYear}
                </p>
              )}

              <div className="mt-6 border-t border-gray-200 pt-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  details
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {book.description}
                </p>
              </div>

              {/* Extra Actions (Optional) */}
              <div className="mt-8 flex gap-4">
                <Link to={`/editBook/${book._id}`}>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700">
                  Edit book
                  
                </button>
                </Link>
                <button onClick={handleDelete}
                 className=" bg-red-500 text-white px-6 py-2 rounded-lg shadow click:bg-indigo-700">
                  Delete
                  
                </button>
                <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-200">
                  Add to Wishlist
                </button>

              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-center py-20 text-xl">
            Loading book details...
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleBook;

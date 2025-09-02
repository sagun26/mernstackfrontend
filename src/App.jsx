import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleBook from './pages/singleBook/SingleBook';
import AddBook from './pages/addBook/AddBook';
import EditBook from './pages/editBook/EditBook';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<SingleBook/>} />
        <Route path="/addBook" element={<AddBook/>} />
        <Route path="/editBook/:id" element={<EditBook/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

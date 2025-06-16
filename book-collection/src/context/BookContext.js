import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';

const BookContext = createContext();

export const useBooks = () => useContext(BookContext);

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (query = '') => {
    const res = await axios.get(`/api/books${query}`);
    setBooks(res.data);
  };

  const addBook = async (book) => {
    const res = await axios.post('/api/books', book);
    fetchBooks();
    return res.data;
  };

  const deleteBook = async (id) => {
    await axios.delete(`/api/books/${id}`);
    fetchBooks();
  };

  const updateBook = async (id, updatedBook) => {
    const res = await axios.put(`/api/books/${id}`, updatedBook);
    fetchBooks();
    return res.data;
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, fetchBooks, addBook, deleteBook, updateBook }}>
      {children}
    </BookContext.Provider>
  );
}
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookDetailPage from './pages/BookDetailPage';
import EditBookPage from './pages/EditBookPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/add' element={<AddBookPage />} />
      <Route path='/book/:id' element={<BookDetailPage />} />
      <Route path='/edit/:id' element={<EditBookPage />} />
    </Routes>
  );
}
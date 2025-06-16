import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`/api/books/${id}`).then(res => setBook(res.data));
  }, [id]);

  if (!book) return <p className='p-4'>Loading...</p>;

  return (
    <div className='p-4'>
      {book.coverImage && (
  <img
    src={book.coverImage}
    className="w-64 h-80 object-cover rounded mb-4"
    alt={book.title}
  />
)}

      <h2 className='text-2xl font-bold'>{book.title}</h2>
      <p className='text-lg'>{book.author}</p>
      <p>{book.genre} • {book.publicationYear}</p>
      <p>Status: {book.isRead ? '✅ Read' : '❌ Unread'}</p>
      <div className='mt-4 flex gap-2'>
        <Link to={`/edit/${book._id}`} className='bg-yellow-500 text-white px-3 py-1 rounded'>Edit</Link>
        <Link to='/' className='bg-gray-500 text-white px-3 py-1 rounded'>Back</Link>
      </div>
    </div>
  );
}

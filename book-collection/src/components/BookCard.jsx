import { Link } from 'react-router-dom';
import { useBooks } from '../context/BookContext';

export default function BookCard({ book }) {
  const { deleteBook, updateBook } = useBooks();
  return (
    <div className='border rounded-xl p-4 shadow hover:shadow-md transition'>
      {book.coverImage && (
 <img
  src={book.coverImage || 'https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg?20090511140841'}
  className="h-48 w-full object-cover rounded mb-2"
  alt={book.title}
/>
)}

      <h2 className='font-bold text-lg'>{book.title}</h2>
      <p className='text-lg text-gray-700'>{book.author}</p>
      <p className='text-m'>{book.genre} • {book.publicationYear}</p>
      <p>Status: {book.isRead ? '✅ Read' : '❌ Unread'}</p>
      <div className='flex justify-between items-center mt-2'>

        <button onClick={() => updateBook(book._id, { isRead: !book.isRead })} className='text-md bg-blue-200 px-2 py-1 rounded'>
          Mark as {book.isRead ? 'Unread' : 'Read'}
        </button>
        <button onClick={() => deleteBook(book._id)} className='mt-2 text-md bg-red-400 text-white px-2 py-1 rounded'>Delete</button>
        <Link to={`/book/${book._id}`} className='text-md text-green-600'>Details</Link>
      </div>
          </div>
  );
}
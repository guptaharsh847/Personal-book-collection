import { useBooks } from '../context/BookContext';
import { useState } from 'react';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { books } = useBooks();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ genre: '', isRead: '' });

  const filtered = books.filter(b =>
    (!filter.genre || b.genre === filter.genre) &&
    (!filter.isRead || (filter.isRead === 'read' ? b.isRead : !b.isRead)) &&
    (b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.genre.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold'>📚 My Book Collection</h1>
        <Link to='/add' className='bg-green-600 text-white px-4 py-2 rounded'>Add Book</Link>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar setFilter={setFilter} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
        {filtered.map(book => <BookCard key={book._id} book={book} />)}
      </div>
    </div>
  );
}


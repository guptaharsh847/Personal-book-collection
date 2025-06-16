export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type='text'
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholder='Search by title, author or genre'
      className='w-full border px-3 py-2 rounded mb-2'
    />
  );
}
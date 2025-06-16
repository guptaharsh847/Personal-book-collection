import BookForm from '../components/BookForm';

export default function AddBookPage() {
  return (
    <div className='p-4 max-w-xl mx-auto'>
      <h2 className='text-xl font-bold mb-4'>➕ Add New Book</h2>
      <BookForm />
    </div>
  );
}
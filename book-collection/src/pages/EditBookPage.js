import { useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';

export default function EditBookPage() {
  const { id } = useParams();
  return (
    <div className='p-4 max-w-xl mx-auto'>
      <h2 className='text-xl font-bold mb-4'>✏️ Edit Book</h2>
      <BookForm bookId={id} />
    </div>
  );
}
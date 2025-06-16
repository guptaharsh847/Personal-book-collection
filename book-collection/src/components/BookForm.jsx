import { useEffect, useState } from "react";
import { useBooks } from "../context/BookContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BookForm({ bookId }) {
  const { addBook, updateBook } = useBooks();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publicationYear: "",
    isRead: false,
    coverImage: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (bookId) {
      axios.get(`/api/books/${bookId}`).then((res) => setFormData(res.data));
    }
  }, [bookId]);

  const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const dataToSend = { ...formData };

 if (formData.coverImage instanceof File) {
  try {
    const base64 = await toBase64(formData.coverImage);
    // console.warn("BASE64 preview:", dataToSend.coverImage?.slice(0, 50));


    if (base64.startsWith('data:image')) {
      dataToSend.coverImage = base64;
      // console.warn("BASE64 preview in start with:", dataToSend.coverImage?.slice(0, 50));

    } else {
      console.error("Base64 does not start with data:image");
      delete dataToSend.coverImage;
    }
  } catch (err) {
    console.error("Failed to convert image to base64", err);
    delete dataToSend.coverImage;
  }
}




  try {
    if (bookId) {
      await updateBook(bookId, dataToSend);
    } else {
      await addBook(dataToSend);
    }
    navigate('/');
  } catch (error) {
    console.error("Error saving book:", error);
  }



};

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const dataToSend = { ...formData };

//  if (formData.coverImage instanceof File) {
//   const base64 = await toBase64(formData.coverImage);
//   dataToSend.coverImage = base64;
// }


//     if (bookId) {
//       await updateBook(bookId, dataToSend);
//     } else {
//       await addBook(dataToSend);
//     }
//     navigate("/");
//   };

//   const toBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = reject;
//   });
// };


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Title"
        className="border px-3 py-2 rounded"
        required
      />
      <input
        type="text"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        placeholder="Author"
        className="border px-3 py-2 rounded"
        required
      />
      <select
  value={formData.genre}
  onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
  className="border px-3 py-2 rounded"
  required
>
  <option value="">Select Genre</option>
  <option value="Fiction">Fiction</option>
  <option value="Non-fiction">Non-fiction</option>
  <option value="Sci-Fi">Sci-Fi</option>
  <option value="Fantasy">Fantasy</option>
  <option value="Biography">Biography</option>
  <option value="Self-help">Self-help</option>
  <option value="History">History</option>
  <option value="Spirituality">Spirituality</option>
  <option value="Philosophy">Philosophy</option>
  <option value="Education">Education</option>
</select>

      <input
        type="number"
        value={formData.publicationYear}
        onChange={(e) =>
          setFormData({ ...formData, publicationYear: e.target.value })
        }
        placeholder="Publication Year"
        className="border px-3 py-2 rounded"
        required
      />
      <label className="text-sm">Cover Image</label>
      <input
  type="file"
  accept="image/*"
  onChange={(e) => setFormData({ ...formData, coverImage: e.target.files[0] })}
/>

      <label className="text-sm">Status</label>
      <select
        value={formData.isRead}
        onChange={(e) =>
          setFormData({ ...formData, isRead: e.target.value === "true" })
        }
        className="border px-3 py-2 rounded"
      >
        <option value="false">Unread</option>
        <option value="true">Read</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
        Save
      </button>
    </form>
  );
}

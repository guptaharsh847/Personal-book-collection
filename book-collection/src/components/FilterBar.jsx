export default function FilterBar({ setFilter }) {
  return (
    <div className="flex gap-2 mb-2">
      <select
        onChange={(e) => setFilter((f) => ({ ...f, genre: e.target.value }))}
        className="border px-2 py-1 rounded"
      >
        <option value="">All Genres</option>
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
      <select
        onChange={(e) => setFilter((f) => ({ ...f, isRead: e.target.value }))}
        className="border px-2 py-1 rounded"
      >
        <option value="">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
    </div>
  );
}

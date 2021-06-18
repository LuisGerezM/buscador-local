export default function SearchResultItem({ name, email }) {
  return (
    <div className="result">
      <p className="text-result">{name}</p>
      <p className="text-result">{email}</p>
    </div>
  );
}

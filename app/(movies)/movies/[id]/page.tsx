export default function MovieDeTail({ params: { id } }) {
  console.log(id);
  return (
    <div>
      <h1>Movie Detail {id}</h1>
    </div>
  );
}

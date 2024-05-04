import { API_URL } from "../app/constants";

async function getMovies(id: String) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: String }) {
  const movie = await getMovies(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
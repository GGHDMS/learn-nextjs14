const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(id: String) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

async function getVideos(id: String) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDeTail({ params: { id } }) {
  const [movie, videos] = await Promise.all([getMovies(id), getVideos(id)]);
  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
}

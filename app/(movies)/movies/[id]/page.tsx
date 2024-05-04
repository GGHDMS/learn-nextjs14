import MovieVideos from "../../../../component/movie-videos";
import MovieInfo from "../../../../component/movie-info";
import { Suspense } from "react";

export default async function MovieDeTail({ params: { id } }) {
  return (
    <div>
      <h2>Movie Detail Page</h2>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

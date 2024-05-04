import MovieVideos from "../../../../component/movie-videos";
import MovieInfo, { getMovies } from "../../../../component/movie-info";
import { Suspense } from "react";

interface IParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovies(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDeTail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

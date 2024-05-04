import { API_URL } from "../app/constants";
import styles from "../style/movie-videos.module.css";

async function getVideos(id: String) {
  console.log(`Fetching videos: ${Date.now()}`);
  // throw new Error("Error in getVideos");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: String }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          title={video.name}
        />
      ))}
    </div>
  );
}

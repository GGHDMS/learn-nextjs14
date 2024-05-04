import { API_URL } from "../app/constants";

async function getVideos(id: String) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("Error in getVideos");
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return response.json();
}

export default async function MovieVideos({ id }: { id: String }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}

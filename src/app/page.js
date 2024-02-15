
import { VideoCard } from "./components/VideoCard";


const getVideos = async () => {
  const URL = "http://localhost:3001/ivan-trejo-challenge/video";
  const apiVideos = await fetch(URL);
  const data = await apiVideos.json();
  return data;
};

export default async function Home() {

  const videos = await getVideos();

  console.log("ESTOS SON LOS VIDEOS DE DATA", videos)
  return (
    <main className="flex flex-col items-center h-fit w-full">
      <h1>Youtube CLONE</h1>

      <section className="grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 md:grid-cols-2 my-6 p-6 md:grid-rows-4 md:gap-2 place-items-center">
        {videos.map((product) => (
          <VideoCard key={product.id} data={product} />
        ))}
      </section>
    </main>
  );
}

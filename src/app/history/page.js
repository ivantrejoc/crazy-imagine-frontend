import { VideoDetHistory } from "../components/VideoDetHistory";
import { getUserVideos } from "../api/services/api.services";

const History = async (id) => {
 
  id = "fc998da5-6773-478e-ab2b-807c72382ed7";
  console.log(id);

  const videos = await getUserVideos(id);

  console.log("LOS VIDEOS: ", videos);
  return (
    <main className="flex flex-col items-center h-fit">
      <h2 className="mt-2 text-xl font-medium">Historial de Videos</h2>

      <section className="grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 md:grid-cols-2 my-6 p-6 md:grid-rows-4 md:gap-2 place-items-center">
        {videos.map((video) => (
          <VideoDetHistory
            key={video.Video.id}
            id={video.Video.id}
            link={video.Video.link}
            title={video.Video.title}
            likes={video.Video.like_count}
            unlikes={video.Video.unlike_count}
          />
        ))}
      </section>
    </main>
  );
};
export default History;

import { VideoDetail } from "@/app/components/VideoDetail";

const getVideoById = async (id) => {
  const URL = `http://localhost:3001/ivan-trejo-challenge/video/${id}`;
  const apiVideo = await fetch(URL);
  const data = await apiVideo.json();

  return data;
};

const VideoById = async (id) => {
  const cleanId = id.params.id;
  const video = await getVideoById(cleanId);

  return (
    <section className="flex items-center pt-8">
      <VideoDetail
        key={video.id}
        id={video.id}
        link={video.link}
        title={video.title}
        likes={video.like_count}
        unlikes={video.unlike_count}
      />
    </section>
  );
};
export default VideoById;

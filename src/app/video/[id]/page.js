import { VideoDetail } from "@/app/components/VideoDetail";
import { getVideoById } from "@/app/api/services/api.services";




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
        comments={video.Comments}
      />
    </section>
  );
};
export default VideoById;

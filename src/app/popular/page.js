"use client";
import { VideoCard } from "../components/VideoCard";
import { getPopularVideos } from "../api/services/api.services";
import { useState, useEffect } from "react";




const Popular =  () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchPopular() {
      const videosData = await getPopularVideos();
      setVideos(videosData);
      setLoading(false);
    }
    fetchPopular();
  }, []);




  return (
    <main className="flex flex-col items-center h-fit">
      <h2 className="mt-2 text-xl font-medium">Videos más populares</h2>
      {loading ? (
        <p>Cargando Videos...</p>
      ) : (
        <section className="grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 md:grid-cols-2 my-6 p-6 md:grid-rows-4 md:gap-2 place-items-center">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              link={video.link}
              likes={video.like_count}
              unlikes={video.unlike_count}
            />
          ))}
        </section>
      )}
    </main>
  );
};
export default Popular;

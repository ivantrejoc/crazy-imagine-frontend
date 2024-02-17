"use client";
import { useState, useEffect } from "react";
import { VideoCard } from "./components/VideoCard";
import { Pagination } from "./components/Pagination";
import { getVideos } from "./api/services/api.services";


export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  useEffect(() => {
    async function fetchVideos() {
      const videosData = await getVideos();
      setVideos(videosData);
      setLoading(false);
    }
    fetchVideos();
  }, []);

  //Lógica paginado
  const indexOfLastVideo = currentPage * pageSize;
  const indexOfFirstVideo = indexOfLastVideo - pageSize;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="flex flex-col items-center h-fit">
      {loading ? (
        <p>Cargando Videos...</p>
      ) : (
        <section className="grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 md:grid-cols-2 my-6 p-6 md:grid-rows-4 md:gap-2 place-items-center">
          {currentVideos.map((video) => (
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
      <Pagination
        pageSize={pageSize}
        videos={videos}
        currentPage={currentPage}
        pagination={pagination}
      />
    </main>
  );
}

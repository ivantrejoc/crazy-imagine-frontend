"use client";
import { useState, useEffect } from "react";
import { VideoCard } from "./components/VideoCard";
import { Pagination } from "./components/Pagination";

const getVideos = async () => {
  const URL = "http://localhost:3001/ivan-trejo-challenge/video";
  const apiVideos = await fetch(URL);
  const data = await apiVideos.json();
  return data;
};

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    async function fetchVideos() {
      const data = await getVideos();
      setVideos(data);
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
      <Pagination
        pageSize={pageSize}
        videos={videos}
        currentPage={currentPage}
        pagination={pagination}
      />
      <section className="grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 md:grid-cols-2 my-6 p-6 md:grid-rows-4 md:gap-2 place-items-center">
        {currentVideos.map((video) => (
          <VideoCard key={video.id} data={video} />
        ))}
      </section>
    </main>
  );
}

export const getVideos = async () => {
    const URL = "http://localhost:3001/ivan-trejo-challenge/video";
    const apiVideos = await fetch(URL);
    const data = await apiVideos.json();
    return data;
  };

  export const getVideoById = async (id) => {
    const URL = `http://localhost:3001/ivan-trejo-challenge/video/${id}`;
    const apiVideo = await fetch(URL, { next: { revalidate: 30 } });
    const data = await apiVideo.json();
  
    return data;
  };
  


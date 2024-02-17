export const getVideos = async () => {
    const URL = "http://localhost:3001/ivan-trejo-challenge/video";
    const apiVideos = await fetch(URL);
    const data = await apiVideos.json();
    return data;
  };

  export const getPopularVideos = async () => {
    const URL = "http://localhost:3001/ivan-trejo-challenge/video";
    const apiVideos = await fetch(URL);
    const data = await apiVideos.json();
    return data;
  };

  export const getUserVideos = async (id) => {
    const URL = `http://localhost:3001/ivan-trejo-challenge/uservideo/${id}`;
    const apiVideos = await fetch(URL, { next: { revalidate: 30 } });
    const data = await apiVideos.json();
    return data;
  };

  export const getVideoById = async (id) => {
    const URL = `http://localhost:3001/ivan-trejo-challenge/video/${id}`;
    const apiVideo = await fetch(URL, { next: { revalidate: 30 } });
    const data = await apiVideo.json();
  
    return data;
  };
  


  export const likesHandler = async (id, userId) => {
    const URL = "http://localhost:3001/ivan-trejo-challenge/like";
    const postLike = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        video_id: id,
        user_id: userId
      })
    });
    if (postLike?.error) {
      console.log(postCommentData.error);
      alert(errors);
    }
  };

  export const unlikesHandler = async (id, userId) => {
    const URL = "http://localhost:3001/ivan-trejo-challenge/unlike";
    const postUnlike = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        video_id: id,
        user_id: userId
      })
    });
    if (postUnlike?.error) {
      console.log(postCommentData.error);
      alert(errors);
    }
  };

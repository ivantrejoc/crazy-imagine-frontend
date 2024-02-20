import { LiaCommentSolid } from "react-icons/lia";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { likesHandler } from "@/app/api/services/api.services";
import { unlikesHandler } from "@/app/api/services/api.services";

//Manejo de likes y unlikes:
const postLike = async (id, userId) => {
  return await likesHandler(id, userId);
}

const postUnlike = async (id, userId) => {
  return await unlikesHandler(id, userId)
}

const VideoCard = ({ id, title, link, likes, unlikes }) => {
  const name = "Daniela Quintero";
  const userId = "c140e17f-efae-4b5f-b979-4a3e37c3ef12";



  return (
    <div className=" w-96 flex justify-center items-center">
      <div className="max-w-lg container bg-white rounded-xl shadow-lg transition duration-200 hover:scale-105 hover:shadow-2xl">
        <div>
          <iframe
            className="w-full h-80 mx-h-80 rounded-t-xl"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <a href={`/video/${id}`}>
            <h1 className="text-lg h-20 mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
              {title}
            </h1>
          </a>
        </div>

        <div className="flex p-4 justify-between">
          <div className="flex space-x-2 gap-3">
            <div className="flex space-x-1 items-center">
              <LiaCommentSolid className="w-6 h-6" />
              <span>traer cant</span>
            </div>
            <div className="flex space-x-1 items-center">
              <button className="w-6 h-6 hover:transform p-1 border border-black rounded-full transition duration-200 hover:scale-105 hover:bg-red-500">
                <GrLike className="w-full h-full" onClick={() => postLike(id, userId)}/>
              </button>

              <span className="text-lg font-medium">{likes}</span>
            </div>
            <div className="flex space-x-1 items-center">
              <button className="w-6 h-6 hover:transform p-1 border border-black rounded-full transition duration-200 hover:scale-105 hover:bg-red-500">
                <GrDislike className="w-full h-full" onClick={() => postUnlike(id, userId)} />
              </button>

              <span className="text-lg font-medium">{unlikes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

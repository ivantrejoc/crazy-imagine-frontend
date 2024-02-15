import { LiaCommentSolid } from "react-icons/lia";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";

const VideoCard = () => {
  return (
    <div className=" w-96 bg-red-300 flex justify-center items-center">
      <div className="max-w-lg container bg-white rounded-xl shadow-lg transition duration-200 hover:scale-105 hover:shadow-2xl">
        <div>
          <iframe
            className="w-full h-72 rounded-t-xl"
            src="https://www.youtube.com/embed/3xiIOgYdbiE?si=txcBQ7fu1dF7AtOk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h1 className="text-lg mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
            Video Title
          </h1>
        </div>

        <div className="flex p-4 justify-between">
          <div className="flex space-x-2 gap-3">
            <div className="flex space-x-1 items-center">
              <LiaCommentSolid classNameName="w-6 h-6"/>
              <span>22</span>
            </div>
            <div className="flex space-x-1 items-center">
            <GrLike classNameName="w-5 h-5" />
              <span>20</span>             
            </div>
            <div className="flex space-x-1 items-center">
            <GrDislike classNameName="w-5 h-5" />
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

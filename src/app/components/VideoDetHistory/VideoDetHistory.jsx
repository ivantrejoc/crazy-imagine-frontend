import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";

const VideoDetHistory = ({ id, title, link, likes, unlikes }) => {
  return (
    <div className="w-full h-fit border inline-flex border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 my-12 justify-center">
      <div className="w-full h-fit p-2">
        <div>
          <iframe
            className="w-full h-[500px] mt-2"
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h2 className="my-2 lg:leading-tight lg:tracking-tight font-bold text-gray-800 text-xs lg:text-lg">
            {title}
          </h2>
        </div>

        <div className="flex items-start justify-start mt-12 mb-1 w-full">
          <div className="flex px-4 py-12 w-1/4 justify-between">
            <div className="flex space-x-2 gap-5">
              <div className="flex space-x-1 items-center gap-1">
                <div
                  className="w-14 h-14 hover:transform p-2 border-2 border-black rounded-full transition duration-200 hover:scale-105 hover:bg-red-500"
                  
                >
                  <GrLike className="w-full h-full" />
                </div>

                <span className="text-2xl font-medium">{likes}</span>
              </div>
              <div className="flex space-x-1 items-center gap-1">
                <div
                  className="w-14 h-14 hover:transform p-2 border-2 border-black rounded-full transition duration-200 hover:scale-105 hover:bg-red-500"
                  
                >
                  <GrDislike className="w-full h-full" />
                </div>

                <span className="text-2xl font-medium">{unlikes}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 items-start justify-start ml-4 space-x-2"></div>
      </div>
    </div>
  );
};
export default VideoDetHistory;

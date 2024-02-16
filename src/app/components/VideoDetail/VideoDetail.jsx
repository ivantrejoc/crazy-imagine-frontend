import { LiaCommentSolid } from "react-icons/lia";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";

const VideoDetail = () => {
  return (
    <div className="w-3/4 border inline-flex border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full lg:max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 my-12 justify-center">
      <div className="w-full p-2">
        <div>
          <iframe
            className="w-full h-96 max-h-90 mt-2"
            src="https://www.youtube.com/embed/SHbXK1M6I30?si=LBzkqFuwG679k7gQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2 className="my-2 lg:leading-tight lg:tracking-tight font-bold text-gray-800 text-xs lg:text-xl">
            Video Title
          </h2>
        </div>

        <div className="flex items-start justify-start mt-12  mb-4 w-full">
          <form className="w-1/3 rounded-lg px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <h2 className="px-4 pt-3 pb-2 text-gray-800 text-md font-semibold">
                Add a new comment
              </h2>
              <div className="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-normal placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="body"
                  placeholder="Type Your Comment"
                  required
                ></textarea>
              </div>
              <div className="w-full md:w-full flex items-start px-3">
                <div className="-mr-1">
                  <button
                    type="submit"
                    className="bg-red-600 text-white font-normal py-1 px-4 border rounded-lg tracking-wide mr-1 hover:bg-red-700"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="flex px-3 py-8 justify-between">
            <div className="flex space-x-2 gap-3">
              <div className="flex space-x-1 items-center">
                <button>
                  <GrLike classNameName="w-3 h-3" />
                </button>

                <span>35</span>
              </div>
              <div className="flex space-x-1 items-center w-14">
                <button>
                  <GrDislike classNameName="w-full h-full" />
                </button>

                <span>50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoDetail;

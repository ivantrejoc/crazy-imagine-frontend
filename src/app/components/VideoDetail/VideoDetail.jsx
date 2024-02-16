import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { Comments } from "../Comments";

const VideoDetail = ({ id, link, title, likes, unlikes, comments }) => {
  console.log("DATOS DE COMMENTS EN VideDetail: ", comments);
  return (
    <div className="w-3/4 h-fit border inline-flex border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 my-12 justify-center">
      <div className="w-full h-fit p-2">
        <div>
          <iframe
            className="w-full h-96 max-h-90 mt-2"
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
          <form className="w-1/3 rounded-lg px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <h2 className="px-4 pt-3 pb-2 text-gray-800 text-md font-semibold">
                Deja un comentario
              </h2>
              <div className="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-normal placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="body"
                  placeholder="Escribe tu comentario..."
                  required
                ></textarea>
              </div>
              <div className="w-full md:w-full flex items-start px-3">
                <div className="-mr-1">
                  <button
                    type="submit"
                    className="bg-red-600 text-white font-normal py-1 px-4 border rounded-lg tracking-wide mr-1 hover:bg-red-700"
                  >
                    Enviar comentario
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="flex px-4 py-12 justify-between">
            <div className="flex space-x-2 gap-5">
              <div className="flex space-x-1 items-center gap-1">
                <button className="w-8 h-8 hover:transform">
                  <GrLike className="w-full h-full" />
                </button>

                <span className="text-lg font-medium">{likes}</span>
              </div>
              <div className="flex space-x-1 items-center w-14 gap-1">
                <button className="w-8 h-8">
                  <GrDislike className="w-full h-full" />
                </button>

                <span className="text-lg font-medium">{unlikes}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 items-start justify-start ml-4 space-x-2">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-md font-semibold">
            Comentarios
          </h2>
          {comments.map((comment) => (
            <Comments
              key={comment.name_user}
              name={comment.name_user}
              comment={comment.comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default VideoDetail;

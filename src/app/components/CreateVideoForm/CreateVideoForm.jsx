import { IoMdCloudUpload } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { LuLink } from "react-icons/lu";

const CreateVideoForm = () => {
  return (
    <div className="overflow-hidden flex items-center justify-center mt-24">
      <div className="bg-gray-300 lg:w-5/12 md:w-6/12 w-10/12 rounded-md shadow-3xl">
        <div className="bg-gray-400 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-2 md:p-8">
          <IoMdCloudUpload className="w-16 h-16" />
        </div>
        <form className="p-12 md:p-24">
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <MdDriveFileRenameOutline  className="absolute ml-3" width="24" viewBox="0 0 24 24" />
              
            <input
              type="text"
              id="Title"
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full rounded-md"
              placeholder="Title"
            />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <LuLink className="absolute ml-3" viewBox="0 0 24 24" width="24"/>
              
            <input
              type="url"
              id="Link"
              className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full rounded-md"
              placeholder="Link"
            />
          </div>
          <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded-md">
            Subir Video
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateVideoForm
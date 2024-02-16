const Comments = ({name, comment}) => {

    
  return (
    
        
      <div className="block">
        <div className="bg-gray-200 w-auto rounded-md px-2 pb-2">
          <div className="font-medium">
            <a href="#" className="hover:underline text-sm">
              <small>{name}</small>
            </a>
          </div>
          <div className="text-xs">
            {comment}
          </div>
        </div>
        
      </div>
    
  );
};
export default Comments;

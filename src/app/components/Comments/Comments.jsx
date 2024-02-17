const Comments = ({name, comment}) => {

    
  return (
    
        
      <div className="block mb-2">
        <div className="bg-gray-200 w-auto rounded-md px-2 pb-2">
          <div className="font-medium">
            
              <span className="text-xs">{name}</span>
            
          </div>
          <div className="text-sm">
            {comment}
          </div>
        </div>
        
      </div>
    
  );
};
export default Comments;

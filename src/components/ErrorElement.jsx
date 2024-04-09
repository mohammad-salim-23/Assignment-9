import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="mx-auto">
           <h2 className="text-5xl text-center text-red-500 flex items-center justify-center">page Not Found</h2>
          <Link to="/"> <button className="btn btn-accent text-2xl mt-2 text-gray-600" >Go Back</button> </Link>
        </div>
    );
};

export default ErrorElement;

import Banner from "../components/Banner";
import {useLoaderData} from "react-router-dom"
import { AuthContext } from "../AuthContexProvider/AuthContextProvider";
import SingleEstate from "../components/SingleEstate";

const Home = () => {
   
    const states = useLoaderData();
    return (
        <div >
           <Banner></Banner> 
           <h2 className="text-3xl font-bold mt-5 mb-5 text-center">Our Services</h2>
           <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
               states.map(state=><SingleEstate 
               key={state.id}
               state={state}
               ></SingleEstate>) 
              }
           </div>

        </div>
    );
};

export default Home;

import {useParams} from "react-router-dom"
import  { useState, useEffect } from "react";
const ViewProperty = () => {
    const {id} = useParams();
    const [property,setProperty] = useState(null);
    console.log(id);
    useEffect(()=>{
        fetch(`/RealState.json`)
        .then(res=>res.json())
        .then(data=>{
           const foundId = data.find(property=>property.id===parseInt(id));
           setProperty(foundId)
        })
    },[id])
    if (!property) {
        return <div>Loading...</div>;
    }
    const {estate_title,segment_name,description,price,status,area,location,facilities,image} = property;
    return (
        <div className="container mx-auto ">
           <div className="space-y-4 font-semibold mx-auto text-center text-white">
            <div className="flex justify-center">
            <img className="flex justify-center" src={image} alt="" />
            </div>
               <div className="bg-gold mb-0">
               <h2 className="text-2xl font-bold">{estate_title}</h2>
               <h3 className="text-xl">{segment_name}</h3>
               <h3 className="">{description}</h3>
               <h3 className="text-xl">price:{price}</h3>
               <h3 className="text-xl">status:{status}</h3>
               <h3 className="text-xl">location:{location}</h3>
               <h3 className="text-xl">area:{area}</h3>
               </div>
               <div className="bg-gray-400 text-black mt-0">
                    <h3 className="font-bold">Facilities:</h3>
                    <ul>
                        {facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                </div>


           </div>
            
        </div>
    );
};

export default ViewProperty;
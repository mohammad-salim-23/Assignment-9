import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleEstate = ({ state }) => {
  console.log(state);
  const { estate_title, id, image, location, status, area } = state;
  return (
    <div data-aos="fade-up">
      <div className="card w-96 bg-gold  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title  font-bold">{estate_title}</h2>
          <p className="font-semibold">Location:{location}</p>
          <h3 className="font-semibold">area:{area}</h3>
          <h3 className="font-semibold">status:{status}</h3>
          
          <div className="card-actions">
          <Link to={`/RealState/${id}`}>
          <button className="btn bg-base-200 font-bold text-">View Property</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEstate;

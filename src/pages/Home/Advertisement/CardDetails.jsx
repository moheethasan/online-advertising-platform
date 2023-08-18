import { Link, useParams } from "react-router-dom";

const CardDetails = () => {

  const {id, name, image} = useParams();


  return (
    <>
      <div className=" bg-base-200 p-10">
        <h2 className="text-center font-bold text-3xl py-10 text-orange-500 uppercase">
          Details Information Of Our Process
        </h2>
        <div className="card grid grid-cols-1 md:grid-cols-2 items-center bg-white shadow-xl rounded-xl p-10">
          <div className="w-full">
            <figure>
              <img src={image} alt="Album" className="rounded-xl" />
            </figure>
          </div>
          <div className="card-body w-full">
            <h2 className="text-2xl lg:text-3xl font-bold text-orange-500 capitalize text-center pb-5">We will add details for your company advertisement. {id}</h2>
            <p className="">{name}</p>
            <p className="">{id.description}</p>
            <Link to={'/allCompany'} className="btn border border-orange-500 bg-orange-500 text-white hover:bg-white hover:text-orange-500 hover:border-orange-500">Back</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;

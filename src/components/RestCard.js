import { FaStar } from "react-icons/fa";

const RestCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restData?.info;

  return (
    <div className="w-[280px] h-auto bg-[#D9EDBF] text-base rounded-md font-roboto p-4 m-4">
      <img
        alt="photo"
        className="w-full h-[200px] object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="flex justify-around my-4">
        <h3 className="bg-[#0ec714] rounded-md text-white">
          <span className="flex px-2">
            <FaStar />
            {avgRating}
          </span>
        </h3>
        <span className="hidden inline">.</span>
        <h4>{costForTwo}</h4>
        <span className="hidden inline">.</span>
        <h4>{sla.deliveryTime} Mins</h4>
      </div>
    </div>
  );
};

export default RestCard;

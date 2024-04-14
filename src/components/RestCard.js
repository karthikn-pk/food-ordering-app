import { FaStar } from "react-icons/fa";

const RestCard = (props) => {
  const { restData } = props;
  console.log(restData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restData?.info;
  return (
    <div
      data-testid="resCard"
      className="w-[280px] h-[430px] bg-[#D9EDBF]  text-base font-roboto  p-4 m-4 ">
      <img
        alt="photo"
        className="card-img w-full h-[200px] object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <div className="flex justify-around my-4">
        <h3 className="bg-[#0ec714] rounded-md text-white">
          {" "}
          <span className="flex px-2">
            <FaStar />
            {avgRating}
          </span>
        </h3>
        <h1>.</h1>

        <h4>{costForTwo}</h4>
        <h1>.</h1>

        <h4> {sla.deliveryTime} Mins</h4>
      </div>
    </div>
  );
};

export default RestCard;

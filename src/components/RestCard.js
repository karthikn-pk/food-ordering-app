import { STAR_ICON } from "../utils/constants";

const RestCard = (props) => {
  const { restData } = props;
  console.log(restData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restData?.info;
  return (
    <div
      data-testid="resCard"
      className="w-[250px] h-[430px] bg-gray-200 text-base font-serif  p-4 m-4 ">
      <img
        alt="photo"
        className="card-img w-full h-[200px] object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="flex">
        <h3>Rating : {avgRating}</h3>
        <img className="w-4 h-5 mx-2" src={STAR_ICON} />
      </div>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time : {sla.deliveryTime} Mins</h4>
    </div>
  );
};

export default RestCard;

import ItemList from "./ItemList";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div className="w-6/12 cursor-pointer bg-[#D9EDBF] mx-auto my-4 p-2  shadow-lg ">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <MdKeyboardDoubleArrowDown />
      </div>

      {showItems ? <ItemList items={data.itemCards} /> : null}
    </div>
  );
};
export default RestaurantCategory;

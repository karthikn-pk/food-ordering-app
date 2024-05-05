import ItemList from "./ItemList";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const RestaurantCategory = ({ data, isOpen, toggleCategory }) => {
  console.log(isOpen);
  return (
    <div className="w-6/12 sm:w-10/12 cursor-pointer bg-[#D9EDBF] mx-auto my-4 p-2  shadow-lg ">
      <div className="flex justify-between" onClick={toggleCategory}>
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <MdKeyboardDoubleArrowDown />
      </div>
      {isOpen && <ItemList items={data.itemCards} />}{" "}
    </div>
  );
};
export default RestaurantCategory;

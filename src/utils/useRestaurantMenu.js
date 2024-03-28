import { useEffect, useState } from "react";

const useRestaurantMenu = (resid) => {
  const [menuInfo, setmenuInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://quickbite-server-8hwk.onrender.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resid
    );

    const json = await data.json();
    console.log(json);
    setmenuInfo(json);
  };
  return menuInfo;
};
export default useRestaurantMenu;

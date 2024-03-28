import { useEffect, useState } from "react";

const useRestaurantMenu = (resid) => {
  const [menuInfo, setmenuInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://quickbite-server-8hwk.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        resid
    );

    const json = await data.json();
    console.log(json);
    setmenuInfo(json);
  };
  return menuInfo;
};
export default useRestaurantMenu;

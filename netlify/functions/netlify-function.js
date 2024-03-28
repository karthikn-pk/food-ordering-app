// netlify-function.js
exports.handler = async (event, context) => {
  const response = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Set appropriate origin
      "Access-Control-Allow-Headers": "Content-Type", // Allow specified headers
    },
    body: JSON.stringify(data),
  };
};

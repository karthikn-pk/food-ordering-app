exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Headers": "Content-Type", // Allow specified headers
    },
    body: JSON.stringify({ message: "Hello from Netlify Function!" }),
  };
};

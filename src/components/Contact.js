const Contact = () => {
  return (
    <div>
      <div className="w-[750px] p-4 my-8 rounded-lg shadow-lg mx-auto font-roboto bg-green-300">
        <h1 className="fond-bold text-2xl text-center m-4 border-b-2 border-black">
          Contact Us
        </h1>

        <form className="flex flex-col justify-center text-2xl items-center">
          <div className="flex flex-row items-center">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="m-4 bg-green-300 border-b-2 border-black focus:outline-none"
            />
          </div>
          <div className="flex flex-row items-center">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="m-4 bg-green-300 border-b-2 border-black focus:outline-none"
            />
          </div>
          <button className="bg-[#FF9800] w-24 text-xl rounded-lg p-2 m-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;

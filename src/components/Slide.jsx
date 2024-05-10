

const Slide = ({ image, text }) => {
  return (
    <div
      className=" bg-center bg-cover md:h-[660px] h-52"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center w-60 md:w-full">
          <h1 className="md:text-3xl font-semibold text-white">
            {text}
          </h1>
          <br />
          <button className='btn btn-ghost border-white hover:bg-[#db4437] text-white md:font-bold mr-6'>Learn More</button>
            <button className='btn btn-ghost border-white hover:bg-[#db4437] text-white md:font-bold'>About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Slide;

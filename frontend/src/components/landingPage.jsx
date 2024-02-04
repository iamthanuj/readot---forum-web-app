import landingImage from "../assets/landing.jpg";

function LandingPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-secendoryColor font-poppins">
      <div className="flex flex-col gap-5 justify-between container mx-auto mt-[80px] md:flex-row">
        <div className="flex flex-col justify-center gap-9">
          <h1 className="text-5xl  md:text-8xl font-bodoni text-white">
            Stay curious.
          </h1>
          <p className="text-white text-xl max-w-[700px]  md:text-3xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <div>
            <button className="bg-white py-2 px-4 rounded-full font-bold ">
              Start reading
            </button>
          </div>
        </div>
        <div className="h-[480px] w-[480px] mx-auto md:h-[480px] md:w-[480px] md:mx-0">
          <img src={landingImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

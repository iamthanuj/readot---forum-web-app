import landingImage from "../assets/landing.jpg";

function landingPage() {
  return (
    <div className="h-screen w-full bg-secendoryColor">
      <div className="flex justify-between container mx-auto">
        <div>
          <h1>Stay curious.</h1>
          <p>
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button>Start reading</button>
        </div>
        <div className="h-[600px] w-[600px]">
          <img src={landingImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default landingPage;

import heroImage1 from "../../assets/metabnb-hero-image.png";

export default function HeroSection() {
  return (
    <div className="pb-16 flex flex-col lg:flex-row mt-24 md:mt-32 lg:mt-[150px] px-[5%] lg:space-x-20  z-0 w-full">
      <section className="w-full lg:w-[50%]">
        <h2 className="w-full min-[380px]:mb-4 xl:mb-12 md:mb-6 !lg:leading-normal leading-tight tracking-tight  lg:text-left text-2xl  xs:text-4xl md:text-[2.5rem] xl:text-6xl font-medium ">
          Rent a <span className="text-color_primary !font-bold">Place</span>{" "}
          away from <span className="text-color_primary !font-bold">Home</span>{" "}
          in the{" "}
          <span className="text-color_primary !font-bold">Metaverse</span>
        </h2>
        <p className="min-[380px]:text-lg text-xl lg:text-2xl xl:mb-12 mb-6">
          We provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination into reality at your
          comfort zone
        </p>
        <div className=" flex pb-12 lg:pb-0 xl:pb-0 pr-4 lg:pr-0">
          <input
            type="text"
            placeholder="Search for location"
            className="flex-initial focus:outline-color_primary border border-[#B8B8B8] text-sm h-14 w-96 p-4 rounded-l-md"
          />
          <button
            type="button"
            className="flex-initial bg-color_primary text-white h-14 w-56 rounded-r-md -translate-x-1 px-1"
          >
            Search
          </button>
        </div>
      </section>
      <section className="floating-img pb-16 lg:pb-16 w-[100%] lg:w-[50%] flex lg:items-start relative z-10 space-x-2 ">
        <div className="flex flex-col relative top-20 space-y-2 ">
          <div className=" max-w-60 object-cover">
            <img src={heroImage1} alt="" className="w-full h-full" />
          </div>
          <div className=" max-w-60 object-cover">
            <img src={heroImage1} alt="" />
          </div>
        </div>
        <div className="space-y-2">
          <div className=" max-w-60 object-cover">
            <img src={heroImage1} alt="" />
          </div>
          <div className=" max-w-60 object-cover">
            <img src={heroImage1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

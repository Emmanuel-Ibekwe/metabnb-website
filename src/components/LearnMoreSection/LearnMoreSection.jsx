import learnMoreImage from "../../assets/learn-section-image.png";

export default function LearnMoreSection() {
  return (
    <section className="px-[5%] learn-more-gradient pt-12 sm:pt-16 lg:pt-24 pb-0 md:pb-10">
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <div className="w-full lg:w-[45%] text-white">
          <h2 className="font-bold clamp2 sm:text-3xl lg:text-5xl mb-2 md:mb-6 lg:mb-10">
            Metabnb NFTs
          </h2>
          <p className="text-md sm:text-lg  mb-4 md:mb-6 lg:mb-10">
            Discover our NFT gift card collection. Loyal customers get amazing
            gift cards which are traded as NFTs. These NFTs give our customers
            access to loads of exclusive services.
          </p>
          <p className="flex">
            <button
              type="button"
              className="bg-white text-color_primary text-md sm:text-lg w-36 h-10  sm:w-40 sm:h-12 flex-initial rounded-md"
            >
              Learn more
            </button>
          </p>
        </div>
        {/* Image section*/}
        <div className="w-full lg:w-[50%]  p-12 ">
          <div className="flex justify-center floating-img">
            <div className="flex-initial w-[704px]">
              <img src={learnMoreImage} alt="" className="object-scale-down" />
            </div>
          </div>
          <div className="shadow mx-auto translate-x-6"></div>
        </div>
      </div>
    </section>
  );
}

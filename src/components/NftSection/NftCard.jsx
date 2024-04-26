import star from "../../assets/star.png";
import heart from "../../assets/heart.png";

export default function NftCard({ img }) {
  return (
    <div className="flex flex-col max-w-[292px] flex-initial p-4 border border-[#d7d7d7] rounded-xl hover:scale-110 transition duration-200">
      <div className="max-w-[260px] max-h-[265px] relative ">
        <img src={img} alt="" className="object-cover w-full" />
        <span className="absolute right-2 top-2">
          <img src={heart} alt="" />
        </span>
      </div>
      <div className="w-full text-xs space-y-2 mt-2">
        <div className="flex w-full justify-between ">
          <p className="text-left">Desert King</p>
          <p className="text-right font-bold">IMBT per night</p>
        </div>
        <div className="flex w-full justify-between">
          <p>2345km away</p>
          <p>available for 2 weeks stay</p>
        </div>
        <div className="w-full flex justify-start">
          <p className="flex w-[38%] justify-between">
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

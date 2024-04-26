import nft1 from "../../assets/nft1.png";
import star from "../../assets/star.png";

export default function NftCard() {
  return (
    <div className="flex flex-col max-w-[292px] flex-initial p-4 border border-[#d7d7d7] rounded-xl">
      <div className="max-w-[260px] max-h-[265px]">
        <img src={nft1} alt="" className="object-cover w-full" />
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

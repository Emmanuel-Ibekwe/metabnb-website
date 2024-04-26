import angleIcon from "../../assets/angle.png";

export default function WalletDiv({ img, walletName }) {
  return (
    <div className="hover:bg-[#F8F9FA] cursor-pointer px-5 py-3 mt-4 flex justify-between items-center border border-[#d7d7d7] rounded-xl">
      <div className="flex items-center space-x-4">
        <div>
          <img src={img} alt="" />
        </div>
        <p>{walletName}</p>
      </div>
      <div>
        <img src={angleIcon} alt="" />
      </div>
    </div>
  );
}

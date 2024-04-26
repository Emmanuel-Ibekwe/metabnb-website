import { createPortal } from "react-dom";
import closeIcon from "../../assets/x.png";
import metamaskLogo from "../../assets/metamask-color-logo.png";
import walletConnectLogo from "../../assets/wallet-connect.png";
import WalletDiv from "./WalletDiv";

export default function Modal({ onClick }) {
  return createPortal(
    <>
      <div
        onClick={onClick}
        className="z-30 fixed top-0 left-0 bottom-0 bg-[#404040] opacity-30 w-full hover:cursor-pointer overflow-hidden"
      ></div>
      <div className=" z-40 rounded-2xl fixed top-1/2 left-1/2 max-w-[600px] w-[90%] -translate-x-1/2 -translate-y-1/2 h-[400px] bg-white">
        <div className="px-8 h-[78px] w-full flex justify-between items-center w-full border-[#d7d7d7] border-b">
          <p className="text-2xl text-[#333] font-bold">Connect wallet</p>
          <p>
            <button type="button" onClick={onClick}>
              <img src={closeIcon} alt="" />
            </button>
          </p>
        </div>
        <div className="w-full pt-8 px-8">
          <h4>Choose your preferred wallet</h4>
          <WalletDiv img={metamaskLogo} walletName="Metamask" />
          <WalletDiv img={walletConnectLogo} walletName="WalletConnect" />
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

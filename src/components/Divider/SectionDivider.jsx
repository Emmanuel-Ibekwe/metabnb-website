import mbtokenLogo from "../../assets/mbtoken-logo.png";
import mbtokenText from "../../assets/mbtoken.png";
import metamaskLogo from "../../assets/metamask-logo.png";
import metamaskText from "../../assets/metamask.png";
import openseaLogo from "../../assets/opensea-logo.png";
import openseaText from "../../assets/OpenSea.png";

export default function SectionDivider() {
  return (
    <div className="w-full h-16 bg-color_primary flex items-center justify-around space-x-10 w-full px-[5%]">
      {/* Logo */}
      <div className="h-12 w-56 flex items-center justify-center ">
        <div className="flex-initial">
          <img
            src={mbtokenLogo}
            alt=""
            className="object-scale-down h-12 w-12 flex-initial"
          />
        </div>
        <div className="flex-initial">
          <img
            src={mbtokenText}
            alt=""
            className="object-scale-down h-10 w-44 flex-initial "
          />
        </div>
      </div>
      {/* Logo */}
      <div className="h-12 w-56 flex items-center justify-between space-x-1 flex-initial">
        <div className="flex-initial">
          <img
            src={metamaskLogo}
            alt=""
            className="object-scale-down h-10 w-10 flex-initial"
          />
        </div>
        <div className="flex-initial">
          <img
            src={metamaskText}
            alt=""
            className="object-scale-down h-6 w-40 flex-initial"
          />
        </div>
      </div>
      {/* Logo */}
      <div className="h-12 w-56 flex items-center justify-center space-x-1 md:space-x-2 flex-initial">
        <div className="flex-initial">
          <img
            src={openseaLogo}
            alt=""
            className="object-scale-down h-10 w-10"
          />
        </div>
        <div className="flex-initial">
          <img
            src={openseaText}
            alt=""
            className="object-scale-down w-36 h-10 flex-initial translate-y-1"
          />
        </div>
      </div>
    </div>
  );
}

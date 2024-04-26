import metabnbLogo from "../../assets/metabnbLogo2.png";
import xIcon from "../../assets/x-icon.png";
import facebookIcon from "../../assets/facebook-icon.png";
import instagramIcon from "../../assets/instagram-icon.png";

export default function Footer() {
  return (
    <footer className="w-full px-[5%] bg-[#1d1d1d] pt-4 pb-14 text-white">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:space-x-8 xl:space-x-0">
          {/* Logo and socials */}
          <div className="pt-8 flex flex-col space-y-20">
            <div className="max-w-56 max-h-10 flex-initial">
              <img src={metabnbLogo} alt="" className="w-full" />
            </div>
            {/* Socials */}
            <div className="flex">
              <p className="flex w-1/3 justify-between">
                <span>
                  <img src={facebookIcon} alt="" />
                </span>
                <span>
                  <img src={instagramIcon} alt="" />
                </span>
                <span className="h-[18px] w-[18px]">
                  <img
                    src={xIcon}
                    alt=""
                    className="h-[18px] w-[18px] object-scale-down"
                  />
                </span>
              </p>
            </div>
          </div>
          {/* Community */}
          <div className="pt-8 flex flex-col space-y-2">
            <h4 className="font-bold text-lg">Community</h4>
            <div className="flex flex-col space-y-1.5 text-sm">
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">NFT</p>
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">
                Tokens
              </p>
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">
                Landlords
              </p>
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">
                Discord
              </p>
            </div>
          </div>
          {/* Places */}
          <div className="pt-8 flex flex-col space-y-2">
            <h4 className="font-bold text-lg">Places</h4>
            <div className="flex flex-col space-y-1.5 text-sm">
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">
                Castle
              </p>
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">Farms</p>
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">Beach</p>
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">
                Learn more
              </p>
            </div>
          </div>
          {/* About us */}
          <div className="pt-8 flex flex-col space-y-2">
            <h4 className="font-bold text-lg">About us</h4>
            <div className="flex flex-col space-y-1.5 text-sm">
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">
                Road map
              </p>
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">
                Creator
              </p>
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">
                Career
              </p>
              <p className="hover:text-[#d7d7d7] hover:cursor-pointer">
                Contact us
              </p>
            </div>
          </div>
        </div>
        {/* Copyrights section */}
        <div className="pt-6 text-base">
          <p>&copy; 2024 Metabnb</p>
        </div>
      </div>
    </footer>
  );
}

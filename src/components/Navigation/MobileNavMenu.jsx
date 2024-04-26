import { NavLink } from "react-router-dom";
import metabnbLogo from "../../assets/metabnb-logo.png";

export default function MobileNavMenu({ showMobileMenu, onShowModal }) {
  return (
    <>
      <nav>
        <ul
          className={`mobileMenu ${
            showMobileMenu ? "flex" : "hidden"
          }  z-40 fixed top-0 left-0 bottom-0 flex-col  w-full justify-center  items-center space-y-8 bg-white `}
        >
          <li className="hover:text-[#d7d7d7] hover:cursor-pointer">
            <NavLink to="">Home</NavLink>
          </li>
          <li className="hover:text-[#d7d7d7] hover:cursor-pointer">
            <NavLink to="">Place to stay</NavLink>
          </li>
          <li className="hover:text-[#d7d7d7] hover:cursor-pointer">
            <NavLink to="">NFTs</NavLink>
          </li>
          <li className="hover:text-[#d7d7d7] hover:cursor-pointer">
            <NavLink to="">Community</NavLink>
          </li>

          <li>
            <button
              className="btn-nav hover:bg-[#d7d7d7] hover:cursor-pointer"
              type="button" onClick={onShowModal}
            >
              Connect wallet
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

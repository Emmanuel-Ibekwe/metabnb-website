import { useState } from "react";
import { NavLink } from "react-router-dom";
import metabnbLogo from "../../assets/metabnb-logo.png";
import HamburgerButton from "./HamburgerButton";
import MobileNavMenu from "./MobileNavMenu";
import Modal from "../Modal/Modal";

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleConnectWallet = () => {
    setShowMobileMenu(false);
    setShowModal(true);
  };

  return (
    <>
      {showModal && <Modal onClick={() => setShowModal(false)} />}
      {/* Desktop Menu */}
      <ul
        className={`${
          showModal ? "z-20" : "z-50"
        } bg-white hidden lg:flex items-center justify-between px-[5%] py-5 md:space-x-8 fixed top-0 left-0 shadow-md w-full`}
      >
        <li className="hover:text-[#d7d7d7] hover:cursor-pointer">
          <NavLink to="">
            <img src={metabnbLogo} alt="" />
          </NavLink>
        </li>
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
        <li className="hover:text-[#d7d7d7] hover:cursor-pointer ">
          <button
            type="button"
            className="btn-nav hover:bg-[#d7d7d7] hover:cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Connect wallet
          </button>
        </li>
      </ul>

      <HamburgerButton
        showMobileMenu={showMobileMenu}
        onClick={() => setShowMobileMenu(prev => !prev)}
      />

      <MobileNavMenu
        showMobileMenu={showMobileMenu}
        onShowModal={handleConnectWallet}
      />
    </>
  );
}

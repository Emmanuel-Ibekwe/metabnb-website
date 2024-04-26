export default function HamburgerButton({ onClick, showMobileMenu }) {
  return (
    <div
      className={`w-full block lg:hidden px-5 py-5 bg-white fixed  ${
        showMobileMenu ? "z-50" : "z-20"
      } top-0 left-0 ${!showMobileMenu ? "shadow-md" : "shadow-none"}`}
      onClick={onClick}
    >
      <button
        type="button"
        className={`${
          showMobileMenu ? "open" : ""
        } hamburger block lg:hidden focus:outline-none`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
}

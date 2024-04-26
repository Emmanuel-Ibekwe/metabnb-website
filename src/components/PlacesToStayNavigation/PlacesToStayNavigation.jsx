import Setting from "./../../svg/Setting";
export default function PlacesToStayNavigation() {
  return (
    <div className="flex justify-between space-x-4 lg:space-x-6 mt-24 md:mt-32 lg:mt-[150px] w-full px-[5%] items-center text-[#333333]">
      <div className="flex items-center space-x-4 lg:space-x-0 justify-between w-full overflow-x-auto scrollbar">
        <p className="whitespace-nowrap">Restaurant</p>
        <p className="whitespace-nowrap">Cottage</p>
        <p className="whitespace-nowrap">Castle</p>
        <p className="whitespace-nowrap">Fantast City</p>
        <p className="whitespace-nowrap">Beach</p>
        <p className="whitespace-nowrap">Carbins</p>
        <p className="whitespace-nowrap">Off-grid</p>
        <p className="whitespace-nowrap">Farms</p>
      </div>
      <div>
        <button className="flex justify-around items-center border border-[#B4B4B4] w-40 h-12 rounded-lg">
          <span>Location</span>
          <span>
            <Setting />
          </span>
        </button>
      </div>
    </div>
  );
}

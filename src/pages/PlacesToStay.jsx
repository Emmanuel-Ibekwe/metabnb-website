import NavBar from "./../components/Navigation/NavBar";
import NftSection from "./../components/NftSection/NftSection";
import Footer from "../components/Footer/Footer";
import PlacesToStayNavigation from "../components/PlacesToStayNavigation/PlacesToStayNavigation";
import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import nft4 from "../assets/nft4.png";
import nft5 from "../assets/nft5.png";
import nft6 from "../assets/nft6.png";
import nft7 from "../assets/nft7.png";
import nft8 from "../assets/nft8.png";
import nft9 from "../assets/nft9.png";
import nft10 from "../assets/nft10.png";
import nft11 from "../assets/nft11.png";
import nft12 from "../assets/nft12.png";
import nft13 from "../assets/nft13.png";
import nft14 from "../assets/nft14.png";
import nft15 from "../assets/nft15.png";
import nft16 from "../assets/nft16.png";

const nfts = [
  { id: "1", img: nft1 },
  { img: nft2, id: "2" },
  { img: nft3, id: "3" },
  { img: nft4, id: "4" },
  { img: nft5, id: "5" },
  { img: nft6, id: "6" },
  { img: nft7, id: "7" },
  { img: nft8, id: "8" },
  { img: nft9, id: "9" },
  { img: nft10, id: "10" },
  { img: nft11, id: "11" },
  { img: nft12, id: "12" },
  { img: nft13, id: "13" },
  { img: nft14, id: "14" },
  { img: nft15, id: "15" },
  { img: nft16, id: "16" }
];

export default function PlacesToStay() {
  return (
    <>
      <PlacesToStayNavigation />
      <NftSection nfts={nfts} />
    </>
  );
}

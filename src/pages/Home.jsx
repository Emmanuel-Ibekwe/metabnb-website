import HeroSection from "../components/HeroSection/HeroSection";
import SectionDivider from "../components/Divider/SectionDivider";
import NftSection from "../components/NftSection/NftSection";
import LearnMoreSection from "../components/LearnMoreSection/LearnMoreSection";
import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import nft4 from "../assets/nft4.png";
import nft5 from "../assets/nft5.png";
import nft6 from "../assets/nft6.png";
import nft7 from "../assets/nft7.png";
import nft8 from "../assets/nft8.png";

const nfts = [
  { id: "1", img: nft1 },
  { img: nft2, id: "2" },
  { img: nft3, id: "3" },
  { img: nft4, id: "4" },
  { img: nft5, id: "5" },
  { img: nft6, id: "6" },
  { img: nft7, id: "7" },
  { img: nft8, id: "8" }
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <NftSection nfts={nfts} />
      <LearnMoreSection />
    </>
  );
}

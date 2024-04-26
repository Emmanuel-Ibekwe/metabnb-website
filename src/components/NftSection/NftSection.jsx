import { Element } from "react-scroll";
import NftCard from "./NftCard";

export default function NftSection({ nfts }) {
  return (
    <Element name="nfts">
      <section className="pt-8 sm:pt-14 pb-8 sm:pb-10 w-full px-[5%]" id="nfts">
        <h2 className="text-center clamp sm:text-3xl lg:text-4xl font-bold pb-6 sm:pb-8">
          Inspiration for your next adventure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {nfts.map(nft => (
            <NftCard key={nft.id} img={nft.img} />
          ))}
        </div>
      </section>
    </Element>
  );
}

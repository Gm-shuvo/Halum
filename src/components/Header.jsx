import { AiOutlineHome } from "react-icons/ai";
import { BsLightning } from "react-icons/bs";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { BsCollectionPlay } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import HeaderItems from "./HeaderItems";
import ContenerWarrap from "./ContenerWarrap";
const Header = () => {
  return (
    <ContenerWarrap>
      <header className="sticky flex flex-col md:flex-row justify-between items-center pt-5 mb-6 z-50">
        <div className="flex flex-grow max-w-2xl ">
          <HeaderItems title="HOME" Icon={AiOutlineHome} link={'/'}/>
          <HeaderItems title="TRENDING" Icon={BsLightning} link={'/'}/>
          <HeaderItems title="VERIFIED" Icon={HiOutlineBadgeCheck} link={'/'}/>
          <HeaderItems title="COLLECTIONS" Icon={BsCollectionPlay} link={'/'}/>
          <HeaderItems title="SEARCH" Icon={BsSearch} link={'/'}/>
          <HeaderItems title="ACCOUNT" Icon={RxAvatar} link={'/'}/>
        </div>
        <h1 className="text-[#35fcb3] font-[1000] text-4xl tracking-[.15em]">
          Halum
        </h1>
      </header>
    </ContenerWarrap>
  );
};

export default Header;

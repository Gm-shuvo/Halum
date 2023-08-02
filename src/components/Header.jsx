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
      <header className="flex flex-col md:flex-row justify-between items-center m-5 ">
        <div className="flex flex-grow justify-evenly max-w-2xl space-x-1">
          <HeaderItems title="HOME" Icon={AiOutlineHome} />
          <HeaderItems title="TRENDING" Icon={BsLightning} />
          <HeaderItems title="VERIFIED" Icon={HiOutlineBadgeCheck} />
          <HeaderItems title="COLLECTIONS" Icon={BsCollectionPlay} />
          <HeaderItems title="SEARCH" Icon={BsSearch} />
          <HeaderItems title="ACCOUNT" Icon={RxAvatar} />
        </div>
        <h1 className="text-[#35fcb3] font-[1000] text-4xl tracking-[.15em]">
          Halum
        </h1>
      </header>
    </ContenerWarrap>
  );
};

export default Header;

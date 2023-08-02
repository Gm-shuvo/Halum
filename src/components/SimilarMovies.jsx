import "daisyui/dist/full.css";
import ContenerWarrap from "./ContenerWarrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useRef } from "react";
const SimilarMovies = ({ similarMovies, type }) => {
  console.log("similarMovies", similarMovies);
  const imgPath = "https://image.tmdb.org/t/p/w500";

  const carouselRef = useRef(null);

  const navigation = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount =
      direction === "left"
        ? carousel.scrollLeft - (carousel.offsetWidth + 20)
        : carousel.scrollLeft + (carousel.offsetWidth + 20);

    carousel.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <ContenerWarrap>
      {similarMovies && (
        <div className="mb-8 mt-8">
          <div className="relative text-white text-2xl font-bold  ml-10 mt-10 ">
            Similar Movies
            {similarMovies.length > 10 && (
              <>
                <button
                  className="absolute text-lg text-center font-bold text-green-400 right-1 top-[170px] p-2 rounded-full bg-slate-50/30 hover:bg-green-400/90 hover:text-white z-40"
                  onClick={() => navigation("right")}
                >
                  <AiOutlineArrowRight size={20} />
                </button>
                <button
                  className="absolute text-lg text-center font-bold text-green-400 left-1 top-[170px] p-2 rounded-full  bg-slate-50/30 hover:bg-green-400/90 hover:text-white z-40"
                  onClick={() => navigation("left")}
                >
                  <AiOutlineArrowLeft size={20} />
                </button>
              </>
            )}
          </div>
          <div
            ref={carouselRef}
            className=" carousel relative rounded-box gap-5 h-[300px] mt-4 ml-10"
          >
            <>
              {similarMovies?.map((item) => {
                return (
                  item?.poster_path && (
                    <Link
                      to={`/${type}/${item?.id}`}
                      key={item.id}
                      className="carousel-item"
                    >
                      <img
                        src={`${imgPath}${item?.poster_path}`}
                        alt={item?.title || item?.name}
                        className="rounded-box w-[200px] h-[300px] object-cover"
                      />
                    </Link>
                  )
                )
              })}
            </>
          </div>
        </div>
      )}
    </ContenerWarrap>
  );
};

export default SimilarMovies;

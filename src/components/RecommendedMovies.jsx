import "daisyui/dist/full.css";
import ContenerWarrap from "./ContenerWarrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useRef } from "react";
const RecommendedMovies = ({ RecommendMovies, type }) => {
  console.log("RecommendMovies", RecommendMovies);
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
      {RecommendMovies && (
        <div className="mb-20 mt-8">
          <div className="relative text-white text-2xl font-bold  ml-10 mt-10 ">
            Recommended Movies
            {RecommendMovies.length > 10 && (
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
              {RecommendMovies?.map((item) => (
                item?.poster_path && (<Link
                  to={`/${type}/${item?.id}`}
                  key={item.id}
                  className="carousel-item"
                >
                  <img
                    src={`${
                      item.poster_path
                        ? `${imgPath}${item.poster_path}`
                        : "https://via.placeholder.com/80"
                    }`}
                    alt={item.original_title}
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                </Link>)
              ))}
            </>
          </div>
        </div>
      )}
    </ContenerWarrap>
  );
};

export default RecommendedMovies;

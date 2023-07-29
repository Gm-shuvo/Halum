import { useState } from "react";
import { AiFillHeart, AiFillStar, AiTwotoneStar } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";


const MovieCard = ({ movie}) => {
  const [isMarked, setIsMarked] = useState(false);

  // console.log(invi)


  // if (inView && index === totalMovies - 2) {
  //   loadMore();
  // }

  return (
    <div key={movie?.id} className="group relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt=""
        className="h-full object-cover items-center rounded-md group-hover:scale-105"
      />
      <div
        className={` absolute hidden group-hover:flex top-2 right-2 cursor-pointer overflow-hidden`}
        onClick={(prev) => {
          setIsMarked(true);
        }}
      >
        <AiFillHeart
          size={35}
          className={`${
            isMarked ? "fill-red-500 " : " fill-white"
          } stroke-black`}
        />
      </div>
      <div className="absolute hidden group-hover:flex top-2 left-0 cursor-pointer ">
        <CircularProgressbar
          value={movie.vote_average}
          maxValue={10}
          text={`${movie?.vote_average.toFixed(1)}`}
          strokeWidth={13}
          styles={{
            root: {
              width: 50,
              backgroundColor: "#ffff",
              borderRadius: "50%",
            },
            path: {
              stroke: `rgba(0, 244, 49,${(movie.vote_average / 10) * 0.8})`,
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
              borderRadius: "50%",
            },
            trail: {
              stroke: "#fff",
              strokeLinecap: "butt",
              
            },
            text: {
              fill: "rgba(255, 27, 0, 0.99)",
              fontSize: "2rem",
              fontWeight: "bold",
            },
          }}
          
        >
          
          </CircularProgressbar>
      </div>

      <div className="absolute hidden min-h-[24%] -bottom-100  group-hover:grid px-2 pt-2 pb-2  bg-slate-900/90 rounded-t-md opacity-90 group-hover:-bottom-[12px] md:group-hover:-bottom-[9px] group-hover:scale-105 transition duration-300 ease-in-out ">
        <h1 className="text-white text-2xl font-bold">
          {movie?.title || movie?.name}
        </h1>
        <p className="text-white text-sm line-clamp-3 my-2">
          {movie?.overview}
        </p>
        <p className="text-white text-sm">
          {movie?.release_date || movie?.first_air_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

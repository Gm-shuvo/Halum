import PropTypes from "prop-types";
const MovieCard = ({ movie }) => {
  return (
    <div key={movie?.id} className="group relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt=""
        className="h-full object-cover items-center rounded-md group-hover:scale-105"
      />
      <div className="absolute hidden min-h-[24%] -bottom-100  group-hover:grid px-2 pt-2 pb-2  bg-slate-900/90 rounded-t-md opacity-90 group-hover:-bottom-2 group-hover:scale-105 transition duration-300 ease-in-out ">
        <h1 className="text-white text-2xl font-bold">
          {movie?.title || movie?.name}
        </h1>
        <p className="text-white text-sm line-clamp-3">{movie?.overview}</p>
        <p className="text-white text-sm">
          {movie?.release_date || movie?.first_air_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

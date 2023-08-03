import "daisyui/dist/full.css";
import { useEffect, useState } from "react";
import { useFetchData } from "../utils/RequestData";
import { Loader } from "./Loader";
import { Link, useNavigate } from "react-router-dom";

const SearchModal = ({ show, setShow }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const navigate = useNavigate();

  //get data from api
  const { data, isLoading } = useFetchData(
    `/search/movie?query=${searchQuery}`
  );

  useEffect(() => {
    if (!isLoading && data?.results.length > 0) {
      setMovies(data?.results);
    }
    return () => {
      setMovies([]);
    };
  }, [data, isLoading]);

  console.log("searchQuery", searchQuery);

  

  return (
    <div className={`modal ${show ? "modal-open" : ""}  inset-0 transition `}>
      <div className="modal-box p-0  max-w-2xl  relative">
        <button
          className="text-white absolute w-8 h-8 rounded-full text-center text-sm hover:bg-slate-50/20 bg-slate-50/10 top-2 right-2 z-40"
          onClick={() => setShow(false)}
        >
          ✕
        </button>
        <div className="flex flex-col items-center justify-center  overflow-y-scroll">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-[80%] border border-gray-300 rounded-md px-4 py-2 mb-4 mt-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="space-y-6 w-[80%] flex flex-col items-center mt-8 mb-6">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {movies?.map((movie) => (
                  <div onClick={() => {navigate(`/movie/${movie.id}`); setShow(false); setSearchQuery("")}}
                    key={movie.id}
                    className="flex w-full items-center space-x-3 border-2 border-gray-400/10 rounded-md hover:bg-gray-400/20 p-2"
                  >
                    <img
                      src={`${
                        movie.poster_path
                          ? imageBaseUrl + movie.poster_path
                          : "https://via.placeholder.com/150"
                      }`}
                      alt={movie.title}
                      className="w-16 h-24 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{movie.title}</h3>
                      <p className="text-gray-400/90">
                        Rating: {movie.vote_average}
                      </p>
                      <p className="text-gray-400/90">
                        Release Date: {movie.release_date}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="modal-backdrop" onClick={() => setShow(false)}></div>
    </div>
  );
};
export default SearchModal;

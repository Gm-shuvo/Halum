// import { useTrendingMovies } from '../utils/RequestData';
import { Loader } from "../components/Loader";
// import MovieCard from '../components/MovieCard';
import Header from "../components/Header";
import Nav from "../components/Nav";
import requests, { useFetchData } from "../utils/RequestData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export function Home() {
  const {q} = useParams();
  
  console.log("q =>", q);
  const [url, setUrl] = useState(requests.fetchTrendingMovies.url);
  
  useEffect(() => {
    if (q && requests[q]) {
      setUrl(requests[q].url);
    }
    else{
      setUrl(requests.fetchTrendingMovies.url);
    }
  }, [q]);
  
  
  const { data, isLoading, isError } = useFetchData(url);
  console.log("data =>", data);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      
      <Nav />
      <div className="mt-20 sm:mt-24 mx-10 sm:mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10 md:gap-14 ">
        {data.results.map((movie, index) => (
          <>
            <MovieCard key={index} movie={movie}/>
          </>
        ))}
      </div>
      {/* <h1>Trending Movies</h1>
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))} */}
    </div>
  );
}

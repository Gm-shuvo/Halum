import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import requests, { useFetchData } from "../utils/RequestData";
import { Loader } from "../components/Loader";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export function Home() {
  const {q} = useParams();
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(requests.fetchTrendingMovies.url);
  const [page, setPage] = useState(1);
  const [mediaType, setMediaType] = useState("movie");

  useEffect(() => {
    if (q && requests[q]) {
      setUrl(requests[q].url);
      setMediaType(requests[q].media_type);
      
    } else {
      setUrl(requests.fetchTrendingMovies.url);
    }
    setMovies([]);
    setPage(1);
  }, [q]);

  const { data, isLoading } = useFetchData(url, page);
  console.log("🚀 ~ file: Home.jsx:28 ~ Home ~ data:", data)
  console.log('mediaType', mediaType);
  console.log('q' , q)
  
  useEffect(() => {
    if (!isLoading && data?.results.length > 0) {
      setMovies((prev) => [...prev, ...data?.results]);
    }
  }, [data, isLoading]);

  console.log('movies', movies);
  

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };


  if (isLoading && movies.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <div className="mb-8">
        <Nav />
          <InfiniteScroll
          dataLength={movies.length}
          next={loadMore}
          hasMore={movies.length < data?.total_results}
          loader={<Loader size={60} />}
          endMessage={
            <p style={{ textAlign: "center" ,color:"red" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // scrollableTarget="scrollableDiv"
          scrollThreshold={0.9}

          >
            <div className="mt-20 sm:mt-24 mx-10 sm:mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10 md:gap-14 ">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} mediaType={mediaType} />
            ))}
          </div>
          </InfiniteScroll>
      </div>
    </>
  );
}

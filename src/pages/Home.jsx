import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import requests, { useFetchData } from "../utils/RequestData";
import { Loader } from "../components/Loader";
import Nav from "../components/Nav";

export function Home() {
  const { q } = useParams();
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(requests.fetchTrendingMovies.url);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (q && requests[q]) {
      setUrl(requests[q].url);
    } else {
      setUrl(requests.fetchTrendingMovies.url);
    }
  }, [q]);

  const { data, isLoading } = useFetchData(url, page);
  console.log("🚀 ~ file: Home.jsx:23 ~ Home ~ url:", url)
  console.log("🚀 ~ file: Home.jsx:23 ~ Home ~ page:", page)
  console.log("🚀 ~ file: Home.jsx:23 ~ Home ~ data:", data)
  
  useEffect(() => {
    setMovies([]);
    setPage(1);
  },[q]);

  useEffect(() => {
    if (!isLoading && data?.results.length > 0) {
      setMovies((prev) => [...prev, ...data?.results]);
    }
  }, [data, isLoading]);

  const sentinelRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Trigger when the sentinel is 60% visible
    };

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [page]);

  if (isLoading && movies.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <div className="mb-8">
        <Nav />
        <div className="mt-20 sm:mt-24 mx-10 sm:mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10 md:gap-14 ">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
        {/* set observer to load more data */}
      </div>
      <div ref={sentinelRef} />
    </>
  );
}

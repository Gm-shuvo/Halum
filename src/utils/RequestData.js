import { useQuery } from "react-query";
import axios from "axios";

// console.log("🚀 ~ file: RequestData.js:7 ~ API_KEY:", API_KEY)
const BASE_URL = "https://api.themoviedb.org/3";

//useQuery hook
export const useFetchData = (query, page) => {
  
  const { data, isLoading, isError, error } = useQuery(
    [query, page],
    () => fetchData(query, page)
  );
  return { data, isLoading, isError, error};
};

const fetchData = async (query, page) => {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "312273c5a2a378a805baf86d8ecfc78e";
  console.log(page)
  const url = page ? `${query}&page=${page}&api_key=${API_KEY}` : `${query}&api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

export default {
  fetchTrendingMovies: {
    title: "Trending",
    url: `${BASE_URL}/trending/all/week?language=en-US`,
    media_type: "movie"
  },

  fetchTopRatings: {
    title: "Top Rated",
    url: `${BASE_URL}/movie/top_rated?language=en-US`,
    media_type: "movie"
  },

  fetchActionMovies: {
    title: "Action",
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=treu&with_genres=28`,
    media_type: "movie"
  },

  fetchComedyMovies: {
    title: "Comedy",
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35`,
    media_type: "movie"
  },

  fetchHorrorMovies: {
    title: "Horror",
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=27`,
    media_type: "movie"
  },

  fetchRomanticMovies: {
    title: "Romance",
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10749`,
    media_type: "movie"
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=9648`,
    media_type: "movie"
  },

  fetchSciFiMovies: {
    title: "Sci-Fi",
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=878`,
    media_type: "movie"
  },

  fetchWesternMovies: {
    title: "Western",
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=37`,
    media_type: "movie"
  },

  fetchAnimationMovies: {
    title: "Animation",
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=16`,
    media_type: "movie"
  },

  fetchTV: {
    title: "TV shows",
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10770`,
    media_type: "tv"
  },

  fetchPopularTV: {
    title: "Popular TV shows",
    url: `${BASE_URL}/tv/popular?language=en-US`,
    media_type: "tv"
  },

  fetchTopRatedTV: {
    title: "Top Rated TV shows",
    url: `${BASE_URL}/tv/top_rated?language=en-US`,
    media_type: "tv"
  },

  fetchActionAdventureTV: {
    title: "Action & Adventure TV shows",
    url: `${BASE_URL}/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10759`,
    media_type: "tv"
  },

  fetchAnimationTV: {
    title: "Animation TV shows",
    url: `${BASE_URL}/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=16`,
    media_type: "tv"
  },

  fetchComedyTV: {
    title: "Comedy TV shows",
    url: `${BASE_URL}/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35`,
    media_type: "tv"
  },
};

// export const useTrendingMovies = () => {
//   return useQuery('trendingMovies', () => fetchData('/trending/all/week?language=en-US'));
// };

// export const useTopRatings = () => {
//   return useQuery('topRatings', () => fetchData('/movie/top_rated?language=en-US'));
// };

// export const useActionMovies = () => {
//   return useQuery('actionMovies', () => fetchData('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=28'));
// };

// export const useComedyMovies = () => {
//   return useQuery('comedyMovies', () => fetchData('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=35'));
// };

// export const useHorrorMovies = () => {
//   return useQuery('horrorMovies', () => fetchData('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=27'));
// };

// export const useRomanticMovies = () => {
//   return useQuery('romanticMovies', () => fetchData('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10749'));
// };

// export const useMysteryMovies = () => {
//   return useQuery('mysteryMovies', () => fetchData('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=9648'));
// };

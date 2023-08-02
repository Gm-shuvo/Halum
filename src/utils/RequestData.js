import { useQuery } from "react-query";
import axios from "axios";


// console.log("🚀 ~ file: RequestData.js:7 ~ API_KEY:", API_KEY)
const BASE_URL = "https://api.themoviedb.org/3";

//useQuery hook
export const useFetchData = (query, page) => {
  // const TOKEN = process.env.REACT_APP_TOKEN;
  // console.log("🚀 ~ file: RequestData.js:19 ~ fetchData ~ TOKEN:", TOKEN);
  
  const { data, isLoading, isError, error } = useQuery([query, page], () =>
  fetchData(query, page)
  );
  return { data, isLoading, isError, error };
};
const fetchData = async (query, page) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTIyNzNjNWEyYTM3OGE4MDViYWY4NmQ4ZWNmYzc4ZSIsInN1YiI6IjYwOGZlMzQzMGU1OTdiMDA1NzNkZTE3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s4HT2JZS2g34-p9MbjcyHbFNgdBNbQ6WeSodZqIY3EU",
    },
  };

  console.log(page);
  const url = page ? `${BASE_URL}${query}&page=${page}&language='us'` : `${BASE_URL}${query}`;
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

//get generic data

export const useGenericData = (query) => {
  const { data, isLoading} = useQuery(query, () =>
    fetchData(query)
  );
  return { data, isLoading, isError, error };
  };


export default {
  fetchTrendingMovies: {
    title: "Trending",
    url: `/trending/all/week?language=en-US`,
    media_type: "movie",
  },

  fetchTopRatings: {
    title: "Top Rated",
    url: `/movie/top_rated?language=en-US`,
    media_type: "movie",
  },

  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=treu&with_genres=28`,
    media_type: "movie",
  },

  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35`,
    media_type: "movie",
  },

  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=27`,
    media_type: "movie",
  },

  fetchRomanticMovies: {
    title: "Romance",
    url: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10749`,
    media_type: "movie",
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=9648`,
    media_type: "movie",
  },

  fetchSciFiMovies: {
    title: "Sci-Fi",
    url: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=878`,
    media_type: "movie",
  },

  fetchWesternMovies: {
    title: "Western",
    url: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=37`,
    media_type: "movie",
  },

  fetchAnimationMovies: {
    title: "Animation",
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=16`,
    media_type: "movie",
  },

  fetchTV: {
    title: "TV shows",
    url: `/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10770`,
    media_type: "tv",
  },

  fetchPopularTV: {
    title: "Popular TV shows",
    url: `/tv/popular?language=en-US`,
    media_type: "tv",
  },

  fetchTopRatedTV: {
    title: "Top Rated TV shows",
    url: `/tv/top_rated?language=en-US`,
    media_type: "tv",
  },

  fetchActionAdventureTV: {
    title: "Action & Adventure TV shows",
    url: `/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10759`,
    media_type: "tv",
  },

  fetchAnimationTV: {
    title: "Animation TV shows",
    url: `/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=16`,
    media_type: "tv",
  },

  fetchComedyTV: {
    title: "Comedy TV shows",
    url: `/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35`,
    media_type: "tv",
  },
};

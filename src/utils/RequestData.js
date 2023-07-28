import { useQuery } from 'react-query';
import axios from 'axios';


// console.log("🚀 ~ file: RequestData.js:7 ~ API_KEY:", API_KEY)
const BASE_URL = 'https://api.themoviedb.org/3';

//useQuery hook
export const useFetchData = (query) => {
  return useQuery(query, () => fetchData(query));
};
  

const fetchData = async (query) => {
  // const API_KEY = process.env.REACT_APP_API_KEY;  
  const API_KEY = '312273c5a2a378a805baf86d8ecfc78e';
  try {
    const url = `${query}&api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

export default {
  fetchTrendingMovies:{
    title: 'Trending',
    url: `${BASE_URL}/trending/all/week?language=en-US`,
  },

  fetchTopRatings:{
    title: 'Top Rated',
    url: `${BASE_URL}/movie/top_rated?language=en-US`,
  },

  fetchActionMovies:{
    title: 'Action',
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=treu&with_genres=28`,
  },

  fetchComedyMovies:{
    title: 'Comedy',
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35`,
  },

  fetchHorrorMovies:{
    title: 'Horror',
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=27`,
  },

  fetchRomanticMovies:{
    title: 'Romance',
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10749`,
  },
  fetchMysteryMovies:{
    title: 'Mystery',
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=9648`,
  },

  fetchSciFiMovies:{
    title: 'Sci-Fi',
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=878`,
  },

  fetchWesternMovies:{
    title: 'Western',
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=37`,
  },

  fetchAnimationMovies:{
    title: 'Animation',
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=16`,
  },

  fetchTV:{
    title: 'TV shows',
    url: `${BASE_URL}/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10770`,
  },

  fetchPopularTV:{
    title: 'Popular TV shows',
    url: `${BASE_URL}/tv/popular?language=en-US`,
  },

  fetchTopRatedTV:{
    title: 'Top Rated TV shows',
    url: `${BASE_URL}/tv/top_rated?language=en-US`,
  },

  fetchActionAdventureTV:{
    title: 'Action & Adventure TV shows',
    url: `${BASE_URL}/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10759`,
  },

  fetchAnimationTV:{
    title: 'Animation TV shows',
    url: `${BASE_URL}/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=16`,
  },

  fetchComedyTV:{
    title: 'Comedy TV shows',
    url: `${BASE_URL}/discover/tv?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35`,
  },  


  
}

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

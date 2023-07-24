import { useQuery } from 'react-query';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

// console.log("🚀 ~ file: RequestData.js:7 ~ API_KEY:", API_KEY)

const BASE_URL = 'https://api.themoviedb.org/3';

const fetchData = async (endpoint) => {
  const API_KEY = '312273c5a2a378a805baf86d8ecfc78e';
  try {
    const url = `${BASE_URL}${endpoint}&api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

export const useTrendingMovies = () => {
  return useQuery('trendingMovies', () => fetchData('/trending/all/week?language=en-US'));
};

export const useTopRatings = () => {
  return useQuery('topRatings', () => fetchData('/movie/top_rated?language=en-US'));
};

export const useActionMovies = () => {
  return useQuery('actionMovies', () => fetchData('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=28'));
};

export const useComedyMovies = () => {
  return useQuery('comedyMovies', () => fetchData('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=35'));
};

export const useHorrorMovies = () => {
  return useQuery('horrorMovies', () => fetchData('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=27'));
};

export const useRomanticMovies = () => {
  return useQuery('romanticMovies', () => fetchData('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10749'));
};

export const useMysteryMovies = () => {
  return useQuery('mysteryMovies', () => fetchData('/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=9648'));
};

import { useTrendingMovies } from '../utils/RequestData';

export function Home(){
  const { data, isLoading, error } = useTrendingMovies();
  console.log("🚀 ~ file: Home.jsx:5 ~ Home ~ data:", data)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Trending Movies</h1>
      {data.results.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}


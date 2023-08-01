import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id, type } = useParams();
  console.log('id', id);
  console.log('type', type);
  return (
    <div>
      <h1 className="text-white">Single Movie</h1>
    </div>
  );
}

export default SingleMovie;
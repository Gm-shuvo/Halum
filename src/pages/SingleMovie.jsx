import { useParams } from "react-router-dom";
import SinglePageBanner from "../components/SinglePageBanner";
import ContenerWarrap from "../components/ContenerWarrap";
import { useFetchData } from "../utils/RequestData";

const SingleMovie = () => {
  const { id, type } = useParams();

  const {data, isLoading} = useFetchData(`/${type}/${id}/videos`);
  console.log('data', data);
  console.log('id', id);
  console.log('type', type);

  
  return (
    <>
      <SinglePageBanner id = {id} type={type}/>
    </>
  );
}

export default SingleMovie;
import { useParams } from "react-router-dom";
import SinglePageBanner from "../components/SinglePageBanner";
import ContenerWarrap from "../components/ContenerWarrap";
import { useFetchData } from "../utils/RequestData";

const SingleMovie = () => {
  const { id, type } = useParams();

  const {data: videos, isLoading: load1} = useFetchData(`/${type}/${id}/videos`);
  const {data: credits, isLoading: load2} = useFetchData(`/${type}/${id}/credits`);
  console.log('videos', videos?.results?.[0]);
  console.log('crew', credits?.crew);
  console.log('id', id);
  console.log('type', type);

  
  return (
    <div className="pt-16">
      <SinglePageBanner id = {id} type={type} video= {videos?.results?.[0]} crew = {credits?.crew}/>

    </div>
  );
}

export default SingleMovie;
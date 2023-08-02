import { useParams } from "react-router-dom";
import SinglePageBanner from "../components/SinglePageBanner";
import ContenerWarrap from "../components/ContenerWarrap";
import { useFetchData } from "../utils/RequestData";
import Cast from "../components/Cast";
import VideoSection from "../components/VideoSection";

const SingleMovie = () => {
  const { id, type } = useParams();

  const {data: videos, isLoading: load1} = useFetchData(`/${type}/${id}/videos`);
  const {data: credits, isLoading: load2} = useFetchData(`/${type}/${id}/credits`);
  console.log('videos', videos);
  console.log('crew', credits);
  console.log('id', id);
  console.log('type', type);

  const trailer = videos?.results?.filter((item) => item.type === "Trailer");
  console.log('trailer', trailer?.[0]);
  return (
    <div className="pt-16">
      <SinglePageBanner id = {id} type={type} video= {trailer?.[0]} crew = {credits?.crew}/>
      <Cast data={credits?.cast} loading = {load2}/>
      <VideoSection videos={videos?.results} loading = {load1}/>

    </div>
  );
}

export default SingleMovie;
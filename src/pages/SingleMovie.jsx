import { useParams } from "react-router-dom";
import SinglePageBanner from "../components/SinglePageBanner";
import ContenerWarrap from "../components/ContenerWarrap";
import { useFetchData } from "../utils/RequestData";
import Cast from "../components/Cast";
import VideoSection from "../components/VideoSection";
import SimilarMovies from "../components/SimilarMovies";
import RecommendedMovies from "../components/RecommendedMovies";
import { useEffect, useState } from "react";

import { Loader } from "../components/Loader";

const SingleMovie = () => {
  const { id, type } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const { data: videos, isLoading: load1 } = useFetchData(
    `/${type}/${id}/videos`
  );
  const { data: credits, isLoading: load2 } = useFetchData(
    `/${type}/${id}/credits`
  );
  const { data: similarMovies, isLoading: load3 } = useFetchData(
    `/${type}/${id}/similar`
  );
  const { data: recommendMovies, isLoading: load4 } = useFetchData(
    `/${type}/${id}/recommendations`
  );
  console.log("videos", videos);
  console.log("crew", credits);
  console.log("similarMovies", similarMovies);
  console.log("recommendMovies", recommendMovies);
  console.log("id", id);
  console.log("type", type);

  // useEffect(() => {
  //   if (!load1 && !load2 && !load3 && !load4) {
  //     setIsLoading(false);
  //   }
  // }, [id, type, load1, load2, load3, load4]);

  const trailer = videos?.results?.filter((item) => item.type === "Trailer");
  console.log("trailer", trailer?.[0]);
  return (
    <>
      {(!load1 && !load2 && !load3 && !load4) ?  (
        <>
          <div className="pt-16">
            <SinglePageBanner
              id={id}
              type={type}
              video={trailer?.[0]}
              crew={credits?.crew}
            />
            <Cast data={credits?.cast} loading={load2} />
            <VideoSection videos={videos?.results} loading={load1} />
            <SimilarMovies similarMovies={similarMovies?.results} type={type} />
            <RecommendedMovies
              RecommendMovies={recommendMovies?.results}
              type={type}
            />
          </div>
        </>
      ): (
        <Loader />
      )}
    </>
  );
};

export default SingleMovie;

import dayjs from "dayjs";
import { useFetchData } from "../utils/RequestData";
import ContenerWarrap from "./ContenerWarrap";
import Gener from "./Gener";
import { CircularProgressbar } from "react-circular-progressbar";
import { PlayIcon } from "./PlayIcon";

const SinglePageBanner = ({ id, type }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  console.log("id", id);
  console.log("type", type);
  const { data, isLoading } = useFetchData(`/${type}/${id}}`);
  
  console.log("data", data);
  //convert min to hours and min
  const toHours = (min) => {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}h ${minutes}m`;
  }

  return (
    <>
      {!!data && (
        <div className="p-16 mb-12 w-full md:mb-0  min-h-[720px] ">
          <>
            <div className="absolute w-full hight-full top-0 left-0 opacity-20 overflow-hidden">
              <img
                src={`${baseUrl}${data?.backdrop_path}`}
                alt=""
                className="w-full h-full object-cover object-center"
              />
             <div class="w-full h-72 bg-gradient-to-t from-[#0F172A] to-grad-bottom absolute bottom-0 left-0"></div>
            </div>
            <ContenerWarrap>
              <div className="">
                <div className="flex relative flex-col gap-20 md:gap-50 md:flex-row ">
                  <div className="left flex-shrink-0 ">
                    {data?.poster_path ? (
                      <img
                        src={`${baseUrl}${data?.poster_path}`}
                        alt="poster_img"
                        className="block w-64 h-96 object-cover object-center rounded-lg"
                      />
                    ) : (
                      <img
                        src={`${baseUrl}${data?.backdrop_path}`}
                        alt="backdrop_img"
                        className="block w-64 h-96 object-cover object-center"
                      />
                    )}
                  </div>
                  <div className="right flex flex-col items-start">
                    <div className="title text-2xl mb-4">
                      {`${data?.title || data?.name} (${
                        data?.release_date && 
                        dayjs(data?.release_date).format("YYYY")
                      })`}
                    </div>
                    <div className="subtitle text-base text-gray-300/80">
                      {data?.tagline}
                    </div>
                    <div className="gener ">
                      <Gener genres={data?.genres} />
                    </div>
                    <div className="rating play mt-4 flex items-center justify-center">
                      <CircularProgressbar
                        value={data?.vote_average}
                        maxValue={10}
                        text={`${data?.vote_average.toFixed(1)}`}
                        strokeWidth={13}
                        styles={{
                          root: {
                            width: 50,
                            backgroundColor: `rgba(255, 255, 255, 0.8)`,
                            borderRadius: "50%",
                          },
                          path: {
                            stroke: `rgba(3, 252, 152,${
                              data?.vote_average * 0.9
                            })`,
                            strokeLinecap: "butt",
                            transition: "stroke-dashoffset 0.5s ease 0s",
                            borderRadius: "50%",
                          },
                          trail: {
                            stroke: "#fff",
                            strokeLinecap: "butt",
                          },
                          text: {
                            fill: "rgba(255, 27, 0, 1)",
                            fontSize: "2rem",
                            fontWeight: "bold",
                          },
                        }}
                      ></CircularProgressbar>
                      <div className="play-icon ml-4 flex items-center space-x-4 text-base font-bold">
                        <PlayIcon />
                        <span className="text-base">Watch Trailer</span>
                      </div>
                    </div>
                    <div className="overview mt-4 max-w-[600px]">
                      <div className="text-white text-lg font-bold mb-2">
                        Overview:
                      </div>
                      {data?.overview}
                    </div>
                  </div>
                </div>
                <div className=" text-white flex space-x-10 mt-10 border-b-[1px] py-2">
                  {data?.status && <div className="text-white  ">
                    <span className="text-lg font-bold">Status: {" "}</span>
                    <span className="text-base">
                      {data?.status}
                    </span>
                  </div>}
                  {data?.release_date && <div className="text-white ">
                    <span className="text-lg font-bold">Release Date: {" "}</span>
                    <span className="text-base">
                      {dayjs(data?.release_date).format("DD MMMM YYYY")}
                    </span>
                  </div>}
                  {data?.runtime && <div className="text-white ">
                    <span className="text-lg font-bold">Runtime: {" "}</span>
                    <span className="text-base">
                      {toHours(data?.runtime)}
                    </span>
                  </div>}
                  
                </div>
              </div>
            </ContenerWarrap>
          </>
        </div>
      )}
    </>
  );
};

export default SinglePageBanner;

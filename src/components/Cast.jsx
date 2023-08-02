import ContenerWarrap from "./ContenerWarrap";

const Cast = ({ data, loading }) => {
  const url = "https://image.tmdb.org/t/p/w500"
  return (
    <ContenerWarrap>
      {data && (
        <>
          <div className="text-white text-2xl font-bold mb-4 pl-10 mt-10">
            Cast
          </div>
          <div className="flex gap-10 overflow-x-auto pl-10 mt-6 mb-8">
            {data?.map((item) => (
              <div key={item.id} className="text-center space-y-2">
                <div className="relative w-28 h-28 overflow-hidden rounded-full">
                  {<img
                    src={`${item.profile_path ? `${url}${item.profile_path}` : "https://via.placeholder.com/150"}`}
                    alt={item.name}
                    className=" w-full h-full object-cover object-top "
                  />}
                </div>
                <div className="text-white mt-2">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.character}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </ContenerWarrap>
  );
};

export default Cast;

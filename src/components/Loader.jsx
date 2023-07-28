import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="Loading..."
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

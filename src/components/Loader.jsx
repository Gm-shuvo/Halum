import { ColorRing } from "react-loader-spinner";

export const Loader = ({size}) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <ColorRing
        visible={true}
        height={size ? size : 80}
        width={size ? size : 80}
        ariaLabel="Loading..."
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

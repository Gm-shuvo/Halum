
const HeaderItems = ({title, Icon}) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 text-gray-300 hover:text-white">
      <Icon size={23} className= "mb-2 group-hover:animate-bounce"/>
      <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  );
}

export default HeaderItems;
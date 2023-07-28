import result from '../utils/RequestData';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className='relative'>
      <div className="flex px-6 sm:px-10 whitespace-nowrap  overflow-x-scroll no-scrollbar space-x-10 sm:spcae-x-20">
      {Object.entries(result).map(([key, {title,url}]) => (
        <h1 key={key} className="text-xl cursor-pointer transform hover:scale-125 hover:text-white text-gray-300 active:text-[#35fcb3] " onClick={()=> navigate(`/${key}`)}>{title}</h1>
      ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0F172A] h-8 w-1/12"></div>
    </nav>
  );
}

export default Nav;
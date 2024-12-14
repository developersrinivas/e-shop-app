import { FaHome, FaSearch, FaShoppingCart, FaCommentDots, FaRobot } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MobileIcons = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full bg-white flex justify-around py-4 border-t border-gray-200 sm:hidden rounded-t-2xl">
      {/* Home Button */}
      <button
        className="focus:text-purple-500 focus:outline-none transition duration-300"
        onClick={() => navigate('/')}
      >
        <FaHome size={24} />
      </button>

      {/* Search Button */}
      <button
        className="focus:text-purple-500 focus:outline-none transition duration-300"
        onClick={() => navigate('/searchPage')}
      >
        <FaSearch size={24} />
      </button>

      {/* Highlighted Middle Button */}
      <button
        className="relative flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110"
        style={{ width: '64px', height: '64px' }}
        onClick={() => navigate('/')}
      >
        <FaShoppingCart size={32} />
      </button>

      {/* AI Button */}
      <button
        className="focus:text-purple-500 focus:outline-none transition duration-300"
        onClick={() => navigate('/ai')}
      >
        <FaRobot size={24} />
      </button>

      {/* Chat Button */}
      <button
        className="focus:text-purple-500 focus:outline-none transition duration-300"
        onClick={() => navigate('/')}
      >
        <FaCommentDots size={24} />
      </button>
    </div>
  );
};

export default MobileIcons;

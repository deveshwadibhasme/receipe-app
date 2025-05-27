import { useContext } from "react";
import { FavContext } from "../contexts/FavContext";
import { Link } from "react-router-dom";
import { FaHeart, FaTrash } from 'react-icons/fa'; // Add icons

const Favourite = () => {
  const [fav, setFav] = useContext(FavContext);

  return (
    <div className="min-h-screen pt-20 bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0] bg-gray-100">
      <div className="bg-yellow-400/90 py-6 shadow-md sticky top-0">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            My Favorite Recipes
          </h1>
          <div className="flex items-center justify-center gap-2">
            <FaHeart className="text-red-500" />
            <span className="text-gray-700 text-xl">
              {fav?.length || 0} {fav?.length === 1 ? 'Recipe' : 'Recipes'}
            </span>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="container mx-auto px-4 py-8">
        {fav?.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 text-xl">No favorite recipes yet!</p>
            <Link to="/" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
              Browse Recipes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fav?.map((f) => (
              <div 
                key={f.idMeal}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
              >
                <Link to={`/${f.strMeal}`} state={f.idMeal}>
                  <img
                    className="w-full h-48 object-cover"
                    src={f.strMealThumb}
                    alt={f.strMeal}
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">
                      {f.strMeal}
                    </h2>
                  </div>
                </Link>
                <div className="px-4 pb-4">
                  <button
                    onClick={() => {
                      setFav(fav.filter((fav) => fav.idMeal !== f.idMeal));
                    }}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors duration-200"
                  >
                    <FaTrash />
                    <span>Remove from favorites</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourite;

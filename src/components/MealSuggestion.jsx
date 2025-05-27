import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavContext } from "../contexts/FavContext";

const MealSuggestion = ({ meal }) => {
  const [fav, setFav] = useContext(FavContext);
  
  const handleAdd = (favMeal) => {
    if (!fav) {
      setFav(favMeal);
      return;
    }
    const checkRepeat = fav.findIndex((f) => f.idMeal === favMeal.idMeal) !== -1;
    if (checkRepeat) {
      // Using a more user-friendly notification could be implemented here
      alert(`${favMeal.strMeal} is already in your favourite list`);
    } else {
      setFav((prev) => [...prev, favMeal]);
    }
  };

  if (meal === null) {
    return (
      <div className="flex items-center justify-center h-72 text-gray-500 text-lg">
        Please enter a meal name to search
      </div>
    );
  }

  return (
    <div className="mx-auto transform transition-all duration-300 hover:scale-105">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-52 min-h-40">
        <NavLink to={`/${meal.strMeal}`} state={meal.idMeal}>
          <div className="relative group">
            <img
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:opacity-90"
              src={meal.strMealThumb}
              alt={meal.strMeal}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-sm rounded-full">
                {meal.strCategory}
              </span>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-gray-800 font-semibold text-lg mb-2 line-clamp-2">
              {meal.strMeal}
            </h4>
          </div>
        </NavLink>
        <div className="px-4 pb-4">
          <button
            onClick={() => handleAdd(meal)}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Add to Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealSuggestion;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavContext } from "../contexts/FavContext";

const MealSuggestion = ({ meal }) => {
  const [fav, setFav] = useContext(FavContext);
  
  const handleAdd = (favMeal) => {
    if (!fav) {
      setFav(favMeal)
      console.log('process');
      return
    }
      const checkRepeat = fav.findIndex((f) => f.idMeal===favMeal.idMeal) !== -1
      checkRepeat ? alert(`${favMeal.strMeal} is already in your favourite list`) :
      setFav((prev) =>[...prev, favMeal])
  };

  return (
    <>
      {meal === null ? (
        "Enter Someting"
      ) : (
        <div className="mx-auto min-h-72 h-full md:h-52 w-40 md:w-52 text-white">
          <div className="bg-yellow-200 text-black p-2 text-center z-2 mb-4">
            <NavLink to={`/${meal.strMeal}`} state={meal.idMeal}>
              <img
                className="h-40 md:h-44 w-full"
                src={meal.strMealThumb}
                alt=""
              />
              <h3 className="bg-yellow-100 p-1 text-sm md:text-[17px]">
                {meal.strCategory}
              </h3>
              <h4 className="min-h-10 text-sm font-bold">{meal.strMeal}</h4>
            </NavLink>
            <button
              onClick={() => handleAdd(meal)}
              className="h-8 w-full bg-yellow-600 z-4 active:bg-white"
            >
              Add to Favourite
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MealSuggestion;

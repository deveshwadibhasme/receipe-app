import React, { useContext, useEffect } from "react";
import { FavContext } from "../contexts/FavContext";
import { Link } from "react-router-dom";

const Favourite = () => {
  const [fav, setFav] = useContext(FavContext); 

  return (
    <>
      <marquee
        behavior="smooth"
        direction="left"
        className="bg-[rgb(248,211,45)] pt-11"
      >
        I Do more styling and modification in future
      </marquee>
      <div className="text-center flex justify-center items-center bg-[rgb(248,211,45)] gap-2">
        <h1>Favourite Recipes</h1>
        <h2> (Total: {fav?.length})</h2>
      </div>
      <div className="min-h-screen w-screen bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0] pt-24 pl-5 grid grid-cols-3 md:grid-cols-10">
        <>
          {fav?.map((f) => (
            <div className="flex flex-col" key={f.idMeal}>
              <Link to={`/${f.strMeal}`} state={f.idMeal} className="cursor-pointer">
                <img
                  style={{ maxWidth: "100px", marginBottom: "20px" }}
                  src={f.strMealThumb}
                  alt={f.strMeal}
                ></img>
                <h1>{f.strMeal}</h1>
              </Link>
              <div
                style={{ color: "tomato" , cursor: "pointer" }}
                onClick={() => {
                  setFav(fav.filter((fav) => fav.idMeal !== f.idMeal));
                }}
              >
                Delete
              </div>
            </div>
          ))}
        </>
      </div>
    </>
  );
};

export default Favourite;

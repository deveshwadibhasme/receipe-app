import React, { useContext, useState } from "react";
import { FavContext } from "../contexts/FavContext";

const Favourite = () => {
  const [fav] = useContext(FavContext);

  return (
    <>
      <marquee behavior="smooth" direction="left" className='bg-[rgb(248,211,45)] pt-11'>
        I Do more styling and modification in future
      </marquee>
      <div className="min-h-screen w-screen bgImage bg-no-repeat bg-cover bg-[70%_40%] md:bg-[0_0] pt-24 pl-5 grid grid-cols-3 md:grid-cols-10">
        {fav.map((f) => (
          <img
            style={{ maxWidth: "100px", marginBottom: "20px" }}
            src={f.strMealThumb}
            key={f.idMeal}
          ></img>
        ))}
      </div>
    </>
  );
};

export default Favourite;

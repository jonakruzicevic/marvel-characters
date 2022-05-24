import React from "react";
import FavoriteCharacter from "./FavoriteCharacter";

const Characters = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="contents">
      {items.map((item) => (
        <FavoriteCharacter key={item.id} item={item}></FavoriteCharacter>
      ))}
    </section>
  );
};

export default Characters;

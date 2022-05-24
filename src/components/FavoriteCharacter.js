import React from "react";
import { FireIcon } from "@heroicons/react/solid";

const FavoriteCharacter = ({ item }) => {
  const favorite = (item) => {
    let data = JSON.parse(localStorage.getItem("favorites"));
    data.push(item);
    localStorage.setItem("favorites", JSON.stringify(data));
  };

  return (
    <div className="content">
      <div className="content-inner">
        <div className="content-front">
          <img
            src={item.thumbnail.path + "/portrait_xlarge.jpg"}
            alt="portrait"
          />
        </div>
        <div className="content-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong>
              {item.name}
            </li>
            <li>
              <strong>Description:</strong>
              {item.description}
            </li>
            <li>
              <button type="button" onClick={() => favorite(item)}>
                <FireIcon className="h-3 w-3 text-blue-500" />
                THE BEST
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCharacter;

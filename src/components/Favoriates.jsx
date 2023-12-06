import React, { useEffect, useState } from "react";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorite articles from local storage
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoritesNews")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1 className="text-4xl">Favorite Articles</h1>
    </div>
  );
};

export default Favorite;

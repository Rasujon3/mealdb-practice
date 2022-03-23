import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const handleAddToCart = (props) => {
    console.log("clicked", props);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {/* <h1>meals: {meals.length}</h1> */}
        {meals.map((meal) => (
          <Meal
            key={meal.idMeal}
            product={meal}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        {/* <Cart cart={cart} /> */}
        <h1>Cart Summary</h1>
      </div>
    </div>
  );
};

export default Meals;

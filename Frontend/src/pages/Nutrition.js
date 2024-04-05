import React, { useState } from 'react';

const Nutrition = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div>
      <h2>Nutrition</h2>
      {/* Render list of meals */}
      <ul>
        <li onClick={() => handleMealSelect("Breakfast")}>Breakfast</li>
        <li onClick={() => handleMealSelect("Lunch")}>Lunch</li>
        <li onClick={() => handleMealSelect("Dinner")}>Dinner</li>
      </ul>
      
      {/* Display selected meal details */}
      {selectedMeal && (
        <div>
          <h3>{selectedMeal}</h3>
          {/* Include details, nutritional information, etc. */}
        </div>
      )}
    </div>
  );
};

export default Nutrition;

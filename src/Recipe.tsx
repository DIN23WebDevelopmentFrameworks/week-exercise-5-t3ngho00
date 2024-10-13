// Recipe.tsx
import React from 'react';

type RecipeType = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

interface RecipeProps {
  recipe: RecipeType;
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>{recipe.name}</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong></p>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      {/* Additional recipe data can be displayed here if needed */}
    </div>
  );
};

export default Recipe;

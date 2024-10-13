// RecipeList.tsx
import React from 'react';
import Recipe from './Recipe';

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

interface RecipeListProps {
  recipes: RecipeType[];
  selectedTag: string | null;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, selectedTag }) => {
  return (
    <div>
      <h2>Recipes for {selectedTag}</h2>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;

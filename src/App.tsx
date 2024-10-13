// App.tsx
import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';

type Recipe = {
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

const App = () => {
  const [currentView, setCurrentView] = useState<'tags' | 'recipes'>('tags');
  const [tagList, setTagList] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Fetch the tag list when component mounts
    fetch('https://dummyjson.com/recipes/tags')
      .then((res) => res.json())
      .then((data) => {
        setTagList(data);
      })
      .catch((error) => {
        console.error('Error fetching tag list:', error);
      });
  }, []);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setCurrentView('recipes');

    // Fetch recipes for the selected tag
    fetch(`https://dummyjson.com/recipes/tag/${tag}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  };

  const handleBackClick = () => {
    setCurrentView('tags');
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {currentView === 'tags' && (
        <RecipeTagList tags={tagList} onTagClick={handleTagClick} />
      )}
      {currentView === 'recipes' && (
        <div>
          <button onClick={handleBackClick}>Back to Tags</button>
          <RecipeList recipes={recipes} selectedTag={selectedTag} />
        </div>
      )}
    </div>
  );
};

export default App;

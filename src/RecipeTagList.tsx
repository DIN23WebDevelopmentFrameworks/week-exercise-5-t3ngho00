// RecipeTagList.tsx
import React from 'react';
import RecipeTag from './RecipeTag';

interface RecipeTagListProps {
  tags: string[];
  onTagClick: (tag: string) => void;
}

const RecipeTagList: React.FC<RecipeTagListProps> = ({ tags, onTagClick }) => {
  return (
    <div>
      <h2>Select a Recipe Tag:</h2>
      <ul>
        {tags.map((tag) => (
          <RecipeTag key={tag} tag={tag} onClick={onTagClick} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeTagList;

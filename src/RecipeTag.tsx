// RecipeTag.tsx
import React from 'react';

interface RecipeTagProps {
  tag: string;
  onClick: (tag: string) => void;
}

const RecipeTag: React.FC<RecipeTagProps> = ({ tag, onClick }) => {
  return (
    <li onClick={() => onClick(tag)} style={{ cursor: 'pointer' }}>
      {tag}
    </li>
  );
};

export default RecipeTag;

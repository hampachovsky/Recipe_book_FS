'use client';
import { Recipe } from '@/types/types';
import { useRouter } from 'next/navigation';
import React from 'react';

interface RecipeItemProps {
  recipe: Recipe;
}

export const RecipeItem: React.FC<RecipeItemProps> = ({ recipe }) => {
  const router = useRouter();
  return (
    <div
      key={recipe.idMeal}
      className="border p-4 m-2 hover:curser-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => router.push(`/recipe/${recipe.idMeal}`)}
    >
      <h1 className="text-xl font-semibold text-center">{recipe.strMeal}</h1>
      <p className="text-large  text-center">{recipe.strArea}</p>
      <p className="text-large  text-center">{recipe.strCategory}</p>

      {recipe.strMealThumb && (
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-64 object-cover rounded-lg mt-4"
        />
      )}
    </div>
  );
};

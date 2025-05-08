import { FilterSelect, RecipeItem } from '@/components';
import { fetchRecipes } from '@/services';
import { PageSearchParams } from '@/types/types';
import React from 'react';

export default async function Home({ params, searchParams }: PageSearchParams) {
  const res = await fetchRecipes();
  if (res.error || res.success === null) {
    return <h1 className="text-2xl bold text-center">{res.error}</h1>;
  }
  console.log(params, searchParams);
  return (
    <div>
      <h1 className="text-2xl bold text-center">home page</h1>
      <FilterSelect type="category" />
      {res.recipes.meals.map(recipe => (
        <React.Fragment key={recipe.idMeal}>
          <RecipeItem recipe={recipe} />
        </React.Fragment>
      ))}
    </div>
  );
}

import { RecipeSidebar } from '@/components';
import { fetchRecipe } from '@/services/actions/recipesActions';
import { PageSearchParams, Recipe } from '@/types/types';
import Link from 'next/link';

export default async function RecipePage({ params }: PageSearchParams) {
  const fetchedRecipe = await fetchRecipe(params.id);

  if (fetchedRecipe?.error || !fetchedRecipe?.success) {
    return (
      <h1 className="text-center text-red-500 text-xl">Recipe not found</h1>
    );
  }

  const recipe: Recipe = fetchedRecipe.success;

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = recipe[`strIngredient${i + 1}` as keyof Recipe];
    const measure = recipe[`strMeasure${i + 1}` as keyof Recipe];
    return ingredient ? { name: ingredient, measure: measure || '' } : null;
  }).filter(Boolean);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-7xl mx-auto">
      <div className="flex-1">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full md:w-64 rounded-xl shadow-lg object-cover"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-center md:text-left">
              {recipe.strMeal}
            </h1>
            <Link
              href={`/?country=${recipe.strArea}`}
              className="text-blue-600 hover:underline text-center md:text-left"
            >
              {recipe.strArea}
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p className="text-gray-700 whitespace-pre-line text-large">
            {recipe.strInstructions}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {ingredients.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/?ingredient=${encodeURIComponent(item!.name)}`}
                  className="text-blue-500 hover:underline"
                >
                  {item!.name}
                </Link>{' '}
                - {item!.measure}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <aside className="w-full md:w-64">
        <RecipeSidebar />
      </aside>
    </div>
  );
}

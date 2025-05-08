'use server';

import { filtersAPI } from '../endpoints';

export async function fetchFilterOptions(
  type: 'category' | 'area' | 'ingredient' = 'category'
) {
  try {
    const filters = await filtersAPI.getAll(type);
    return { filters, error: null, success: true };
  } catch (error: unknown) {
    console.error('Error fetching filters:', error);
    return { error: 'Something went wrong', success: null };
  }
}

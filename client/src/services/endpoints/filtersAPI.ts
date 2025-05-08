import { fetchClient } from '@/services';

export const filtersAPI = {
  async getAll(type: 'category' | 'area' | 'ingredient'): Promise<unknown[]> {
    const response = await fetchClient.request<unknown[]>(
      `filters?type=${type}`,
      {
        next: { revalidate: 3600 },
      }
    );
    return response;
  },
};

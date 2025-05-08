import { fetchClient } from '@/services';

export const clientAPI = {
  async getAll(qs: string = '', type: string = 'active'): Promise<unknown> {
    const response = await fetchClient.request(``, {
      next: { revalidate: 3600 },
    });
    return response;
  },
};

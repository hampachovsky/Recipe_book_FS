'use client';
import { fetchFilterOptions } from '@/services';
import { FilterType } from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface FilterSelectProps {
  type: FilterType;
}

export const FilterSelect: React.FC<FilterSelectProps> = ({ type }) => {
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchFilterOptions()
      .then(data => {
        let key = '';
        switch (type) {
          case 'category':
            key = 'strCategory';
            break;
          case 'area':
            key = 'strArea';
            break;
          case 'ingredient':
            key = 'strIngredient';
            break;
        }
        if (data.filters && Array.isArray(data.filters)) {
          setOptions(
            (data.filters as { [key: string]: string }[]).map(item => item[key])
          );
        } else {
          setOptions([]);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [type]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) return;
    router.push(`/?${type === 'area' ? 'country' : type}=${value}`);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
        Filter by {type}
      </label>
      <select
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-md"
        defaultValue=""
      >
        <option value="" disabled>
          Select {type}
        </option>
        {loading ? (
          <option disabled>Loading...</option>
        ) : (
          options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

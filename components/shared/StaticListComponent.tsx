import React from 'react';

// Define a type for the item
type Item = {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  tags: string[];
};

// Static data array
const staticData: Item[] = [
  {
    id: 1,
    title: 'Item One',
    description: 'This is the first item',
    isActive: true,
    tags: ['react', 'typescript'],
  },
  {
    id: 2,
    title: 'Item Two',
    description: 'This is the second item',
    isActive: false,
    tags: ['tailwind', 'component'],
  },
  {
    id: 3,
    title: 'Item Three',
    description: 'This is the third item',
    isActive: true,
    tags: ['static', 'data'],
  },
];

const StaticListComponent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-blue-700">Static Data List</h2>
      <ul className="space-y-4">
        {staticData.map((item) => (
          <li
            key={item.id}
            className="border p-4 rounded-md bg-gray-50 hover:shadow transition"
          >
            <div className="font-semibold text-lg">#{item.id}: {item.title}</div>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className={`text-xs mt-1 ${item.isActive ? 'text-green-600' : 'text-red-600'}`}>
              {item.isActive ? 'Active' : 'Inactive'}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaticListComponent;

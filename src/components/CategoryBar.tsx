
import React from 'react';
import { Button } from '@/components/ui/button';

type Category = {
  id: number;
  name: string;
  icon?: React.ReactNode;
};

type CategoryBarProps = {
  categories: Category[];
  selectedCategory: number | null;
  onSelectCategory: (id: number | null) => void;
};

const CategoryBar = ({ categories, selectedCategory, onSelectCategory }: CategoryBarProps) => {
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex space-x-2 min-w-max px-4">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          className={selectedCategory === null ? "bg-fast-yellow text-fast-brown" : ""}
          onClick={() => onSelectCategory(null)}
        >
          Todos
        </Button>
        
        {categories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className={selectedCategory === category.id ? "bg-fast-yellow text-fast-brown" : ""}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.icon}
            <span className="ml-1">{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;

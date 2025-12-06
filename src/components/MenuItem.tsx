import React from 'react';

// Let's find some appropriate images later.
import PlaceholderImage from '../assets/images/IMG_4844_pizza_1.png'; 

type MenuItemProps = {
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
  onClick?: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price, imageUrl, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img src={imageUrl || PlaceholderImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-text-dark mb-2">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="text-2xl font-bold text-brand-olive">{price}</div>
      </div>
    </div>
  );
};

export default MenuItem;

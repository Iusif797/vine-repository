import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 text-white border-b border-white/30 py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-sm hidden sm:block font-secondary">
          Новоухтомский переулок 4/1
        </div>
        
        <nav className="mx-auto sm:mx-0">
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <a href="#" className="text-sm font-secondary tracking-wide hover:text-wine-gold transition-colors">Каталог</a>
            </li>
            <li>
              <a href="#" className="text-sm font-secondary tracking-wide hover:text-wine-gold transition-colors">Доставка</a>
            </li>
            <li>
              <a href="#" className="text-sm font-secondary tracking-wide hover:text-wine-gold transition-colors">Коллекции</a>
            </li>
            <li>
              <a href="#" className="text-sm font-secondary tracking-wide hover:text-wine-gold transition-colors">Контакты</a>
            </li>
          </ul>
        </nav>
        
        <div className="text-sm hidden sm:block font-secondary">
          8 (812) 123-45-67
        </div>
      </div>
    </header>
  );
};

export default Header; 
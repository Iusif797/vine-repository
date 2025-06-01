import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Основной футер */}
      <div className="bg-[#a19446] text-white py-6">
        <div className="container mx-auto px-4">
          {/* Верхняя навигация */}
          <div className="border-t border-b border-white/30 py-4 mb-6">
            <nav className="flex justify-center">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-x-6 gap-y-3 text-center">
                <li>
                  <a href="#" className="text-sm font-secondary text-white hover:text-white/80">Главная</a>
                </li>
                <li>
                  <a href="#" className="text-sm font-secondary text-white hover:text-white/80">Каталог</a>
                </li>
                <li>
                  <a href="#" className="text-sm font-secondary text-white hover:text-white/80">Поставщики</a>
                </li>
                <li>
                  <a href="#" className="text-sm font-secondary text-white hover:text-white/80">Коллекции</a>
                </li>
                <li>
                  <a href="#" className="text-sm font-secondary text-white hover:text-white/80">Дегустация</a>
                </li>
                <li>
                  <a href="#" className="text-sm font-secondary text-white hover:text-white/80">Коллекция 2020</a>
                </li>
                <li>
                  <a href="#" className="text-sm font-secondary text-white hover:text-white/80">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Нижняя часть футера */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b border-white/30 pb-6">
            {/* Левая колонка с брендом */}
            <div className="flex justify-center md:justify-start mb-4 md:mb-0">
              <a href="#" className="text-sm font-secondary uppercase tracking-wide">
                Винный бутик LE CORTE
              </a>
            </div>
            
            {/* Центральная колонка с телефоном и соц. сетями */}
            <div className="flex justify-center items-center mb-4 md:mb-0">
              <div className="flex items-center gap-6">
                <a href="tel:+78121234567" className="text-sm font-secondary whitespace-nowrap">
                  8 (812) 123-45-67
                </a>
                
                {/* Социальные сети */}
                <div className="flex items-center gap-5">
                  <a href="#" className="text-white hover:text-white/80 flex items-center justify-center w-6 h-6">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.6.223l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.548-.204 1.014.121.826.953l.001.058z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-white/80 flex items-center justify-center w-6 h-6">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.195 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-white/80 flex items-center justify-center w-6 h-6">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.14 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.34.85 0 1.7.12 2.5.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.7 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A9.96 9.96 0 0 0 22 12c0-5.5-4.46-9.96-9.96-9.96z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Правая колонка с доменом */}
            <div className="flex justify-center md:justify-end">
              <a href="#" className="text-sm font-secondary">
                © LE-CORTE.RU
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Подпись разработчика */}
      <div className="bg-gray-900 text-white/60 py-2 text-center text-xs">
        <div className="container mx-auto">
          Developed by Iusif Mamedov
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
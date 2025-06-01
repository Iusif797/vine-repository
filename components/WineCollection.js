import React from 'react';

const WineCollection = () => {
  return (
    <section className="w-full py-20" style={{ backgroundColor: '#e8e0c9' }}>
      <div className="container mx-auto px-4">
        <div className="border-t border-[#a19446] mb-14"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
          {/* Левая колонка с текстом */}
          <div className="flex flex-col">
            <p className="text-sm text-gray-700 mb-5 font-secondary">Новинки коллекций</p>
            
            <h2 className="text-3xl font-medium text-gray-800 mb-1 font-primary">Март 1980</h2>
            <h3 className="text-2xl font-medium text-gray-800 mb-6 font-primary">Урожай Марселя</h3>
            
            <div className="w-24 h-px bg-gray-400 mb-6"></div>
            
            <p className="text-sm text-gray-700 mb-12 max-w-md leading-relaxed font-secondary">
              Великолепное вино из региона Марсель, отличающееся насыщенным вкусом и ароматом. 
              Урожай 1980 года признан одним из лучших за последние десятилетия. 
              Вино имеет богатую историю и изысканный букет.
            </p>
            
            {/* Таблица вин */}
            <div className="mb-12 border border-gray-300 rounded bg-white/20">
              <div className="wine-table-row border-b border-gray-300 p-4 flex items-center hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                <div className="w-16 text-center text-sm text-gray-600 font-medium font-secondary pr-4">1980</div>
                <div className="flex-1 border-l border-gray-300 pl-4">
                  <h4 className="font-medium text-sm mb-1 font-primary">Colli Euganei Bianco Ca' Lustra 1980</h4>
                  <p className="text-sm text-gray-600 font-secondary">Красочная бутылка вина из Марселя</p>
                </div>
              </div>
              
              <div className="wine-table-row border-b border-gray-300 p-4 flex items-center hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                <div className="w-16 text-center text-sm text-gray-600 font-medium font-secondary pr-4">1980</div>
                <div className="flex-1 border-l border-gray-300 pl-4">
                  <h4 className="font-medium text-sm mb-1 font-primary">Colli Euganei Bianco Ca' Lustra 1980</h4>
                  <p className="text-sm text-gray-600 font-secondary">Красочная бутылка вина из Марселя</p>
                </div>
              </div>
              
              <div className="wine-table-row p-4 flex items-center hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                <div className="w-16 text-center text-sm text-gray-600 font-medium font-secondary pr-4">1980</div>
                <div className="flex-1 border-l border-gray-300 pl-4">
                  <h4 className="font-medium text-sm mb-1 font-primary">Colli Euganei Bianco Ca' Lustra 1980</h4>
                  <p className="text-sm text-gray-600 font-secondary">Красочная бутылка вина из Марселя</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-700 mb-10 max-w-md leading-relaxed font-secondary">
              Коллекция вин Марселя 1980 года представляет особую ценность для коллекционеров и ценителей. 
              Каждая бутылка хранит в себе частичку истории виноделия Франции и отражает все особенности 
              терруара региона Прованс.
            </p>
            
            <a href="#" className="bg-[#a19446] text-white uppercase text-sm font-medium py-3 px-8 self-start hover:bg-[#8a7e3c] transition-colors font-secondary tracking-wide">
              Узнать подробнее
            </a>
          </div>
          
          {/* Правая колонка с изображениями */}
          <div className="relative flex flex-col gap-6 mt-4 md:mt-0">
            {/* Основное изображение */}
            <div className="wine-image-container rounded-md overflow-hidden relative">
              <div className="w-full h-72 md:h-80 lg:h-96 overflow-hidden">
                <img 
                  src="/vine.jpg" 
                  alt="Красное вино и виноград" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#a19446]/10 to-transparent opacity-70 mix-blend-overlay"></div>
            </div>
            
            {/* Сетка из двух изображений */}
            <div className="grid grid-cols-2 gap-6">
              <div className="wine-image-container rounded-md overflow-hidden transform md:translate-y-6">
                <div className="w-full h-40 md:h-52 overflow-hidden">
                  <img 
                    src="/vine1.png" 
                    alt="Коллекция вин" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="wine-image-container rounded-md overflow-hidden">
                <div className="w-full h-40 md:h-52 overflow-hidden">
                  <img 
                    src="/vine2.png" 
                    alt="Коллекция вин" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#a19446]/10 -z-10 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#a19446]/10 -z-10 hidden md:block"></div>
            <div className="absolute top-1/4 right-1/3 w-12 h-12 rounded-full bg-[#a19446]/5 -z-10 hidden md:block"></div>
          </div>
        </div>
        
        <div className="border-t border-[#a19446] mt-20"></div>
      </div>
    </section>
  );
};

export default WineCollection; 
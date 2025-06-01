import React from 'react';
import Image from 'next/image';

const TastingForm = () => {
  return (
    <section className="w-full py-16 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto border border-white/20 py-12 px-8 md:px-16 lg:px-24 relative">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-medium text-center font-primary mb-4">
              Запись на дегустацию
            </h2>
            
            <div className="w-24 h-px bg-white/30 mb-6"></div>
            
            <p className="text-center text-sm max-w-lg opacity-80 mb-10">
              Запишитесь на дегустацию, и мы проведём вас по лабиринтам вкуса, где каждый поворот — 
              новое открытие. Вы научитесь распознавать тончайшие ноты и оттенки, отличать регионы и сорта, 
              чувствовать истории, заключенные в каждой бутылке.
            </p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Имя" 
                className="text-sm"
              />
            </div>
            
            <div>
              <input 
                type="tel" 
                placeholder="Телефон" 
                className="text-sm"
              />
            </div>
            
            <div className="md:col-span-2">
              <input 
                type="text" 
                placeholder="Бутик на Невском 103" 
                className="text-sm"
              />
            </div>
            
            <div className="md:col-span-2 flex justify-center mt-6">
              <button 
                type="submit"
                className="border border-white/50 text-white uppercase text-sm py-3 px-16 hover:bg-white/10 transition-colors"
              >
                Записаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TastingForm; 
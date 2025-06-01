import React from 'react';

const WineDescription = () => {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto border border-white/30 p-12">
          <h2 className="text-2xl md:text-3xl text-center mb-4 font-primary">Лучший вкус, это вкус долголетнего вина</h2>
          
          <div className="w-24 h-px bg-white mx-auto my-8"></div>
          
          <p className="text-center text-sm leading-relaxed max-w-2xl mx-auto text-white/80 mb-12 font-secondary">
            Вино — это не просто напиток, а искусство, отточенное тысячелетиями. В каждой капле вина заключена 
            целая история: от солнечных лучей, согревавших виноградники, до умелых рук винодела, создавшего шедевр. 
            Именно выдержка придает вину тот неповторимый характер, который ценится знатоками по всему миру. 
            С течением времени вино раскрывает свои лучшие качества, становясь более глубоким, насыщенным и благородным. 
            Долголетнее вино хранит в себе не только вкус, но и воспоминания, традиции и мастерство поколений виноделов. 
            Наслаждаясь бокалом такого вина, вы прикасаетесь к вековой мудрости и подлинному искусству виноделия, 
            ощущая всю палитру вкуса, которую может подарить только время.
          </p>
          
          <div className="flex justify-center">
            <img src="/vine-svg.svg" alt="Бокал вина" className="h-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineDescription; 
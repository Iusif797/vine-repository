import Head from 'next/head';
import Header from '../components/Header';
import WineDescription from '../components/WineDescription';
import WineCollection from '../components/WineCollection';
import TastingForm from '../components/TastingForm';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Автоматически воспроизводим видео при загрузке страницы
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Автовоспроизведение не поддерживается:', error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Винная страница</title>
        <meta name="description" content="Винная страница с каталогом и дегустацией" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Видео-баннер */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/1633-148614395_small.mp4" type="video/mp4" />
          {/* Резервное изображение, если видео не загрузится */}
          <img src="/first-screen.png" alt="Винный фон" className="w-full h-full object-cover" />
        </video>
      </div>
      
      <Header />
      
      <main className="flex-1">
        <div className="h-screen flex items-center justify-center">
          <div className="space-y-6 flex flex-col">
            <a 
              href="#" 
              className="bg-wine-gold text-white px-10 py-3 font-medium tracking-wider hover:bg-wine-gold/80 transition-colors uppercase text-sm sm:text-base font-secondary"
            >
              ВИННАЯ КАРТА
            </a>
            
            <a 
              href="#" 
              className="bg-wine-gold text-white px-10 py-3 font-medium tracking-wider hover:bg-wine-gold/80 transition-colors uppercase text-sm sm:text-base font-secondary"
            >
              ДЕГУСТАЦИЯ
            </a>
          </div>
        </div>

        <WineDescription />
        <WineCollection />
        <TastingForm />
      </main>
      
      <Footer />
    </div>
  );
} 
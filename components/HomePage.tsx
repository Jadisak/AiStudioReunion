
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="relative h-full flex flex-col items-center justify-center text-center p-4 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url('https://picsum.photos/seed/reunionbg/1200/800')` }}
      ></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-in-down">
          Class of '04 Reunion
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in-up">
          Celebrating 20 Years of Memories
        </p>
        <div className="text-md md:text-xl font-light">
          <p>Saturday, October 26th, 2024</p>
          <p>The Grand Ballroom</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

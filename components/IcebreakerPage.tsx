
import React, { useState, useCallback } from 'react';
import { generateIcebreaker } from '../services/geminiService';

const IcebreakerPage: React.FC = () => {
  const [icebreaker, setIcebreaker] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIcebreaker = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const question = await generateIcebreaker();
      setIcebreaker(question);
    } catch (err) {
      setError('Failed to generate an icebreaker. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="p-4 md:p-6 flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Reunion Icebreaker</h2>
      <p className="max-w-md mb-8 text-slate-600 dark:text-slate-400">
        Feeling a bit shy? Click the button to get a fun question to ask an old friend and get the conversation started!
      </p>

      <div className="w-full max-w-md p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-h-[12rem] flex flex-col justify-center items-center">
        {isLoading ? (
          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Generating question...</span>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : icebreaker ? (
          <blockquote className="text-xl font-medium text-slate-800 dark:text-slate-200">
            "{icebreaker}"
          </blockquote>
        ) : (
          <p className="text-slate-500 dark:text-slate-400">Click the button to get started!</p>
        )}
      </div>

      <button
        onClick={fetchIcebreaker}
        disabled={isLoading}
        className="mt-6 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
      >
        {isLoading ? 'Thinking...' : 'Get a New Question'}
      </button>
    </div>
  );
};

export default IcebreakerPage;

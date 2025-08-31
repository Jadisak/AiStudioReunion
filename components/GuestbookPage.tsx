
import React, { useState, useCallback } from 'react';
import type { GuestbookEntry } from '../types';

interface GuestbookPageProps {
  entries: GuestbookEntry[];
  addEntry: (name: string, message: string) => void;
}

const GuestbookPage: React.FC<GuestbookPageProps> = ({ entries, addEntry }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      addEntry(name, message);
      setName('');
      setMessage('');
    }
  }, [addEntry, name, message]);

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-slate-100">Guestbook</h2>

      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 mb-8">
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Leave a Message</h3>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="mt-1 block w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share a memory or a good wish!"
              className="mt-1 block w-full px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Post Message
          </button>
        </form>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {entries.slice().reverse().map(entry => (
          <div key={entry.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4">
            <p className="text-slate-600 dark:text-slate-400">"{entry.message}"</p>
            <div className="text-right text-sm mt-2">
              <span className="font-semibold text-slate-800 dark:text-slate-200">- {entry.name}</span>
              <span className="text-slate-500 dark:text-slate-500 ml-2">({entry.timestamp})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestbookPage;

import React, { useState, useCallback } from 'react';
import { Page } from './types';
import type { GuestbookEntry } from './types';
import { GUESTBOOK_DATA } from './constants';

import HomePage from './components/HomePage';
import SchedulePage from './components/SchedulePage';
import GalleryPage from './components/GalleryPage';
import GuestbookPage from './components/GuestbookPage';
import IcebreakerPage from './components/IcebreakerPage';

const NavItem: React.FC<{
  label: string;
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  // Fix for line 18: Changed JSX.Element to React.ReactElement for consistency and to avoid namespace errors.
  icon: React.ReactElement;
}> = ({ label, page, currentPage, setCurrentPage, icon }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${
        isActive
          ? 'text-sky-500 dark:text-sky-400'
          : 'text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400'
      }`}
    >
      <div className="w-6 h-6 mb-1">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
      {isActive && <div className="w-10 h-1 bg-sky-500 dark:bg-sky-400 rounded-full mt-1"></div>}
    </button>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>(GUESTBOOK_DATA);

  const addGuestbookEntry = useCallback((name: string, message: string) => {
    const newEntry: GuestbookEntry = {
      id: Date.now(),
      name,
      message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setGuestbookEntries(prevEntries => [...prevEntries, newEntry]);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage />;
      case Page.Schedule:
        return <SchedulePage />;
      case Page.Gallery:
        return <GalleryPage />;
      case Page.Guestbook:
        return <GuestbookPage entries={guestbookEntries} addEntry={addGuestbookEntry} />;
      case Page.Icebreaker:
        return <IcebreakerPage />;
      default:
        return <HomePage />;
    }
  };
  
  const navIcons = {
      Home: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /></svg>,
      Schedule: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>,
      Gallery: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
      Guestbook: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>,
      Icebreaker: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 012.829-5.855L12 9.66l1.201.099a4.5 4.5 0 012.829 5.855L15 18.75l-.813-2.846M15 13.5a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  };


  return (
    <div className="flex flex-col h-screen font-sans">
      <main className="flex-1 overflow-y-auto pb-20">{renderPage()}</main>

      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700">
        <div className="flex justify-around max-w-xl mx-auto">
          <NavItem label="Home" page={Page.Home} currentPage={currentPage} setCurrentPage={setCurrentPage} icon={navIcons.Home} />
          <NavItem label="Schedule" page={Page.Schedule} currentPage={currentPage} setCurrentPage={setCurrentPage} icon={navIcons.Schedule}/>
          <NavItem label="Gallery" page={Page.Gallery} currentPage={currentPage} setCurrentPage={setCurrentPage} icon={navIcons.Gallery} />
          <NavItem label="Guestbook" page={Page.Guestbook} currentPage={currentPage} setCurrentPage={setCurrentPage} icon={navIcons.Guestbook} />
          <NavItem label="Icebreaker" page={Page.Icebreaker} currentPage={currentPage} setCurrentPage={setCurrentPage} icon={navIcons.Icebreaker} />
        </div>
      </nav>
    </div>
  );
};

export default App;

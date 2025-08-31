
import React from 'react';
import type { ScheduleEvent, GalleryImage, GuestbookEntry } from './types';

// Icons for the schedule
const WelcomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const DinnerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
    </svg>
);

const MusicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3" />
    </svg>
);

const FarewellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

// Mock Data
export const SCHEDULE_DATA: ScheduleEvent[] = [
  { time: '6:00 PM', title: 'Welcome & Check-in', description: 'Grab your name tag and a welcome drink.', icon: <WelcomeIcon /> },
  { time: '7:00 PM', title: 'Dinner is Served', description: 'Enjoy a delicious buffet with old friends.', icon: <DinnerIcon /> },
  { time: '8:30 PM', title: 'Live Music & Dancing', description: 'The DJ starts spinning hits from our era!', icon: <MusicIcon /> },
  { time: '10:00 PM', title: 'Farewell Toast', description: 'A final toast to good times and great memories.', icon: <FarewellIcon /> },
];

export const GALLERY_DATA: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/seed/reunion1/400/300', caption: 'The old gang back together!' },
  { id: 2, src: 'https://picsum.photos/seed/reunion2/400/300', caption: 'Dancing the night away.' },
  { id: 3, src: 'https://picsum.photos/seed/reunion3/400/300', caption: 'Cheers to us!' },
  { id: 4, src: 'https://picsum.photos/seed/reunion4/400/300', caption: 'Remember when...?' },
  { id: 5, src: 'https://picsum.photos/seed/reunion5/400/300', caption: 'Group photo!' },
  { id: 6, src: 'https://picsum.photos/seed/reunion6/400/300', caption: 'So many memories.' },
];

export const GUESTBOOK_DATA: GuestbookEntry[] = [
  { id: 1, name: 'Alice', message: 'So great to see everyone again! It has been too long.', timestamp: '2 hours ago' },
  { id: 2, name: 'Bob', message: 'What a fantastic night! Let\'s not wait another 10 years.', timestamp: '1 hour ago' },
];

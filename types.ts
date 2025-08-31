import type React from 'react';

export enum Page {
  Home = 'Home',
  Schedule = 'Schedule',
  Gallery = 'Gallery',
  Guestbook = 'Guestbook',
  Icebreaker = 'Icebreaker',
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  // Fix for line 14: Changed JSX.Element to React.ReactElement to make React types explicit and resolve namespace error.
  icon: React.ReactElement;
}

export interface GalleryImage {
  id: number;
  src: string;
  caption: string;
}

export interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

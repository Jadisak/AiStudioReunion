
import React from 'react';
import { SCHEDULE_DATA } from '../constants';
import type { ScheduleEvent } from '../types';

const ScheduleCard: React.FC<{ event: ScheduleEvent }> = ({ event }) => (
  <div className="flex items-start space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex-shrink-0 bg-sky-100 dark:bg-sky-900 p-3 rounded-full">
      {event.icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">{event.time}</p>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{event.title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{event.description}</p>
    </div>
  </div>
);

const SchedulePage: React.FC = () => {
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-slate-100">Event Schedule</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {SCHEDULE_DATA.map((event, index) => (
          <ScheduleCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;

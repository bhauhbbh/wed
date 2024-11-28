import React, { useState } from 'react';

const AddToCalendar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const event = {
    title: "ಅಕ್ಷಯ & ಅನುಷ Wedding",
    description: "Wedding Ceremony of ಅಕ್ಷಯ and ಅನುಷ",
    location: "ಧನಾಂಜನೇಯ ಸಭಾಭವನ, ಹೊಳೆಕೊಪ್ಪ, ಸೊರಬ ತಾ||, ಶಿವಮೊಗ್ಗ ಜಿ||",
    startDate: "2024-12-08T09:08:00",
    endDate: "2024-12-08T13:00:00",
  };

  const generateGoogleCalendarUrl = () => {
    const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const dates = `dates=${event.startDate.replace(/[-:]/g, '')}/${event.endDate.replace(/[-:]/g, '')}`;
    const details = `details=${encodeURIComponent(event.description)}`;
    const location = `location=${encodeURIComponent(event.location)}`;
    const text = `text=${encodeURIComponent(event.title)}`;
    
    return `${base}&${dates}&${details}&${location}&${text}`;
  };

  const generateIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.startDate.replace(/[-:]/g, '')}
DTEND:${event.endDate.replace(/[-:]/g, '')}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Add to Calendar
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            <a
              href={generateGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Google Calendar
            </a>
            <button
              onClick={generateIcsFile}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Apple Calendar / Outlook
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCalendar;
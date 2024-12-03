import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const DirectionsComponent = () => {
  const [activeTab, setActiveTab] = useState('wedding'); // Default tab is 'wedding'

  return (
    <div className="text-center w-full max-w-6xl mx-auto px-4 py-8">
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-6 py-3 rounded-lg font-semibold ${
            activeTab === 'wedding'
              ? 'bg-red-600 text-white shadow-lg'
              : 'bg-red-100 text-red-600 hover:bg-red-200'
          }`}
          onClick={() => setActiveTab('wedding')}
        >
          Wedding Direction
        </button>

        <button
          className={`px-6 py-3 rounded-lg font-semibold ${
            activeTab === 'reception'
              ? 'bg-red-600 text-white shadow-lg'
              : 'bg-red-100 text-red-600 hover:bg-red-200'
          }`}
          onClick={() => setActiveTab('reception')}
        >
          Reception Direction
        </button>
      </div>

      {/* Content for Wedding Direction */}
      {activeTab === 'wedding' && (
        <div>
          <div className="mt-8">
            <a
              href="https://maps.app.goo.gl/Wi8ytDTUp4Genppo8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-auto px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg text-lg font-semibold mx-auto"
            >
              <FaMapMarkerAlt className="mr-2 inline" />
              Click here for Wedding direction <br />
              8 ಡಿಸೆಂಬರ್, 2024, ಹೊಳೆಕೊಪ್ಪ
            </a>
          </div>

          {/* Embedded Google Map for Wedding */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11102.25115005065!2d75.07922279944555!3d14.237201034879151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbf3a24b643173%3A0x293d4dcef4b84503!2sDhananjaneya%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1732784492924!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
              title="Wedding Location"
            ></iframe>
          </div>
        </div>
      )}

      {/* Content for Reception Direction */}
      {activeTab === 'reception' && (
        <div>
          <div className="mt-8">
            <a
              href="https://maps.app.goo.gl/j4oEWu23c6jfhYGS7"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-auto px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg text-lg font-semibold mx-auto"
            >
              <FaMapMarkerAlt className="mr-2 inline" />
              Click here for Reception direction <br />
              9 ಡಿಸೆಂಬರ್, 2024, ಕಮಲಾಪುರ
            </a>
          </div>

          {/* Embedded Google Map for Reception */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7696.635771076372!2d76.47779665173844!3d15.304950185929446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77e3f4b85b9df%3A0x2b9c19d243e7247c!2sKamalapur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1733242326309!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
              title="Reception Location"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default DirectionsComponent;

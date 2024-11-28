import { FaMapMarkerAlt } from 'react-icons/fa';

const DirectionsComponent = () => {
  return (
    <div className="text-center w-full max-w-6xl mx-auto px-4 py-10">
      {/* Directions Button */}
      <div className="mt-8">
        <a
          href="https://maps.app.goo.gl/Wi8ytDTUp4Genppo8"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full md:w-auto px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg text-lg font-semibold mx-auto"
        >
          <FaMapMarkerAlt className="mr-2 inline" />
          Get Directions
        </a>
      </div>

      {/* Embedded Google Map */}
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11102.25115005065!2d75.07922279944555!3d14.237201034879151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbf3a24b643173%3A0x293d4dcef4b84503!2sDhananjaneya%20Swamy%20Temple!5e1!3m2!1sen!2sin!4v1732784492924!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default DirectionsComponent;

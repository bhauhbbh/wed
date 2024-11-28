const VenueComponent = () => {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-white py-20">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-red-800 mb-4">The Venue</h2>
            <div className="h-px w-24 bg-red-300 mx-auto"></div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl text-red-700 mb-4">Wedding Ceremony</h3>
              <p className="text-lg text-red-600 mb-2">Taj Palace Gardens</p>
              <p className="text-red-600">11:00 AM onwards</p>
              <div className="mt-4 text-red-600">
                <p>Traditional Ceremony</p>
                <p>Followed by Lunch</p>
              </div>
            </div>
  
            <div className="bg-red-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl text-red-700 mb-4">Reception</h3>
              <p className="text-lg text-red-600 mb-2">Grand Ballroom</p>
              <p className="text-red-600">7:00 PM onwards</p>
              <div className="mt-4 text-red-600">
                <p>Dinner & Dancing</p>
                <p>Celebration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default VenueComponent
const TitleComponent = () => {
  return (
    <div className="relative pt-16 pb-8 px-4">
      <div className="relative bg-white/90 backdrop-blur-sm max-w-3xl p-8 mx-auto">
        <div className="text-center">
          <h3 className="text-blue-900 mb-2 font-kannada font-bold text-xl sm:text-2xl leading-tight">
            ಕಲ್ಯಾಣಕರ್‌ ಕುಟುಂಬದವರಿಂದ
          </h3>
          <span className="text-blue-900 text-2xl sm:text-3xl font-bold font-kannada leading-snug">
            ಮದುವೆಯ ಮಮತೆಯ ಕರೆಯೋಲೆ
          </span>

          <div className="h-px w-32 bg-red-300 mx-auto my-6" />
          
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
            <h1 className="text-4xl sm:text-6xl font-bold text-red-800 font-kannada">ಅಕ್ಷಯ</h1>
            <div className="flex items-center justify-center" style={{ transform: "rotate(20deg)" }}>
              <span className="text-xl sm:text-3xl font-bold text-pink-700 font-kannada stroke-orange-700 stroke-2">ಜೊತೆ</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-red-800 font-kannada">ಅನುಷ</h1>
          </div>

          <div className="h-px w-32 bg-red-300 mx-auto mb-6" />

          <div className="space-y-6 px-4">
            <div className="relative">
              <p className="text-xl sm:text-2xl text-red-700 font-semibold underline font-kannato">
                ನಿಶ್ಚಿತಾರ್ಥ:
              </p>
              <p className="text-lg sm:text-xl text-red-800 font-kannato">
                7 ಡಿಸೆಂಬರ್, 2024 - ರಾತ್ರಿ 8:00
              </p>
            </div>

            <div className="relative">
              <p className="text-xl sm:text-2xl text-red-700 underline font-semibold font-kannato">
                ವಿವಾಹ ಮುಹೂರ್ತ:
              </p>
              <p className="text-lg sm:text-xl text-red-800 font-kannato">
                8 ಡಿಸೆಂಬರ್, 2024 - ಬೆಳಗ್ಗೆ 09:08
              </p>
            </div>

            <div className="relative flex flex-col items-center">
  <div className="flex items-center space-x-2">
    <p className="text-2xl sm:text-3xl text-red-700 underline font-semibold font-style mb-2">
      Reception
    </p>
    <img 
      src="/party.gif" 
      alt="Party Icon" 
      className="w-8 h-8 sm:w-10 sm:h-10"
    />
  </div>
  <p className="text-lg sm:text-xl text-red-800 font-kannato text-center">
    9 ಡಿಸೆಂಬರ್, 2024 <br />
    ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ : ವರನ ಸ್ವಗೃಹ, <br />
    ಆರತಕ್ಷತೆ ಸ್ಥಳ : ಈಶ್ವರ ದೇವಸ್ಥಾನ  <br />
    ಕಮಲಾಪುರ, ವಿಜಯನಗರ (ಜಿ) <br />
  </p>
</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleComponent
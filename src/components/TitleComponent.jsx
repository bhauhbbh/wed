const TitleComponent = () => {
  return (
    <div className="relative pt-16 pb-8 px-4">
      <div className="relative bg-white/90 backdrop-blur-sm max-w-3xl p-8 mx-auto">
        <div className="text-center">
          <h3 className="text-red-600 mb-2 font-kannada font-bold text-xl sm:text-2xl leading-tight">
            ಕಲ್ಯಾಣಕರ್‌ ಕುಟುಂಬದವರಿಂದ
          </h3>
          <span className="text-red-600 text-2xl sm:text-3xl font-bold font-kannada leading-snug">
            ಮದುವೆಯ ಮಮತೆಯ ಕರೆಯೋಲೆ
          </span>

          <div className="h-px w-32 bg-red-300 mx-auto my-6" />
          
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
            <h1 className="text-4xl sm:text-6xl font-bold text-red-800 font-kannada">ಅಕ್ಷಯ</h1>
            <div className="flex items-center justify-center">
              <span className="text-3xl sm:text-5xl font-bold text-red-800 -translate-y-2">❤️</span>
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

            <div className="relative">
              <p className="text-xl sm:text-2xl text-red-700 underline font-semibold font-kannato">
                ವಿವಾಹ ಸ್ಥಳ:
              </p>
              <p className="text-lg sm:text-xl text-red-800 font-kannato">
                ಧನಾಂಜನೇಯ ಸಭಾಭವನ, <br/> 
                ಹೊಳೆಕೊಪ್ಪ , ಸೊರಬ (ತಾ), ಶಿವಮೊಗ್ಗ (ಜಿ)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleComponent
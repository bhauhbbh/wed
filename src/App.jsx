import TitleComponent from './components/TitleComponent'
import DirectionsComponent from './components/DirectionsComponent'
import BackgroundPattern from './components/BackgroundPattern'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-50 to-orange-50 overflow-x-hidden">
      <BackgroundPattern />
      <div className="relative z-10 max-w-7xl mx-auto">
        <TitleComponent />
        <DirectionsComponent />
      </div>
    </div>
  )
}

export default App;
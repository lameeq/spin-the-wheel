import './App.css'
// import Countdown from './components/Countdown/Countdown'
import MainTitle from './components/MainTitle/MainTitle'
import SpinButton from './components/SpinButton/SpinButton'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <>
     <Navigation/>
     <MainTitle/>
     {/* <Countdown/> */}
     <SpinButton />
    </>
  )
}

export default App

import './App.css'
import MainTitle from './components/MainTitle/MainTitle'
import SpinButton from './components/SpinButton/SpinButton'
import Navigation from './components/Navigation/Navigation'
import {useState} from "react";
import Countdown from "./components/Countdown/Countdown.tsx";

function App() {
    const [spins, setSpins] = useState<number>(0);
    return (
        <>
            <Navigation setSpins={setSpins} spins={spins}/>
            <MainTitle/>
            <Countdown setSpins={setSpins}/>
            <SpinButton/>
        </>
    )
}

export default App

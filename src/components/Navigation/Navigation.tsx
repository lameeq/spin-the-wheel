import BackButton from "../BackButton/BackButton";
import SettingsButton from "../SettingsButton/SettingsButton";


import './Navigation.scss'
import SpinsCounter from "../SpinsCounter/SpinsCounter.tsx";
import {Dispatch} from "react";

interface NavigationProps {
    spins: number;
    setSpins: Dispatch<number>;
}

function Navigation({spins, setSpins}: NavigationProps) {
    return (
        <>
            <div className="navbar">
                <BackButton/>
                <SpinsCounter spins={spins} setSpins={setSpins}/>
                <SettingsButton/>
            </div>

        </>
    );
}

export default Navigation
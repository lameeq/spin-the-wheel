import BackButton from "../BackButton/BackButton";
// import SpinsCounter from "../SpinsCounter/SpinsCounter";
import SettingsButton from "../SettingsButton/SettingsButton";
import './Navigation.scss'

function Navigation()
{
    return(
        <>
        <div className="navbar">
            <BackButton/>
            {/* <SpinsCounter/> */}
            <SettingsButton/>
        </div>
            
        </>
    );
}

export default Navigation
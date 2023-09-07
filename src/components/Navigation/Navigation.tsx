import BackButton from "../BackButton/BackButton";
import SettingsButton from "../SettingsButton/SettingsButton";
import ParentComponent from "../Container";



import './Navigation.scss'

function Navigation()
{
    return(
        <>
        <div className="navbar">
            <BackButton/>
            <ParentComponent/>
            <SettingsButton/>
        </div>
            
        </>
    );
}

export default Navigation
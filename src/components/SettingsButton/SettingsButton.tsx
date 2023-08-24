
import {ReactComponent as SettingsButtonSVG} from '../../assets/settings-icon.svg';
import './SettingsButton.scss'

function SettingsButton()
{
    return(
        <>
            <button className="settings-button"><SettingsButtonSVG className='settings-button-svg'/></button>
        </>
    );
}

export default SettingsButton
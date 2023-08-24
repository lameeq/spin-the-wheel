
import {ReactComponent as BackButtonSVG} from '../../assets/back-button.svg';

import './BackButton.scss'

function BackButton()
{
    return(     
        <>
            <button className="back-button">
                <BackButtonSVG className='back-button-svg'/>
            </button>
        </>
    );
}

export default BackButton
import './Countdown.scss'

function Countdown()
{
    /* Implement time api */
    const time = '12:10:53';
    return(
        <>
            <p className="countdown">5 more spins ready in {time} </p>
        </>
    );
}

export default Countdown

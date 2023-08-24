import './SpinsCounter.scss'

function SpinsCounter()
{
    const counter = 3;
    return(
        <>
            <div className="spins-counter">{counter} spins left </div>
        </>
    );
}

export default SpinsCounter
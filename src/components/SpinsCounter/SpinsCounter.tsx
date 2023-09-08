import {Dispatch, FC} from "react";
import './SpinsCounter.scss';

interface SpinsCounterProps {
    spins: number;
    setSpins: Dispatch<number>;
}

// @ts-ignore TODO: Remove ignore
const SpinsCounter: FC<SpinsCounterProps> = ({spins, setSpins}) => {
    // Your SpinsCounter component code here
    return (
        <div>
            <p className="spins-counter">Spins: {spins}</p>
        </div>
    );
};

export default SpinsCounter;

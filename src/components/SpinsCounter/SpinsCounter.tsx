
interface SpinsCounterProps {
  spins: number;
  setSpins: React.Dispatch<React.SetStateAction<number>>;
}

const SpinsCounter: React.FC<SpinsCounterProps> = ({ spins, setSpins }) => {
  // Your SpinsCounter component code here
  return (
    <div>
      <p>Spins: {spins}</p>
    </div>
  );
};

export default SpinsCounter;

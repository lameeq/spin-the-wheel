// ParentComponent.tsx
import React, { useState } from 'react';
import Countdown from './Countdown/Countdown';
import SpinsCounter from './SpinsCounter/SpinsCounter';

const ParentComponent: React.FC = () => {
  const [spins, setSpins] = useState<number>(0);

  return (
    <div>
      <SpinsCounter spins={spins} setSpins={setSpins} />
      <Countdown setSpins={setSpins} />
    </div>
  );
};

export default ParentComponent;

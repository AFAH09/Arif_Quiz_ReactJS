import { useState, useEffect } from 'react';

function EffectLogger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to ${count}`);
  }, [count]);

  return (
    <div>
      <p>Check the console for updates!</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}

export default EffectLogger;

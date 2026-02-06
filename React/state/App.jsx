import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>State Example</h1>
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    </div>
  );
}
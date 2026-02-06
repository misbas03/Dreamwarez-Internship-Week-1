import { useState } from 'react';

function Button({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count}</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button count={count} onClick={() => setCount(count + 1)} />
      <Button count={count} onClick={() => setCount(count + 1)} />
    </>
  );
}
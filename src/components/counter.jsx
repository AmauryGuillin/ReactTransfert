import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addCount = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      {counter}
      <button onClick={addCount}>Count</button>
    </>
  );
}

export { Counter };

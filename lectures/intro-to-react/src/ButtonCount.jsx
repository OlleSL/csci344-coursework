import React, { useState } from "react";

export default function ButtonCount({ initial }) {
  const [count, setCount] = useState(initial);

  function addOne() {
    setCount(count + 1);
  }

  function resetCounter() {
    setCount(initial);
  }

  return (
    <div>
      <button onClick={addOne}>You have clicked {count} times</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
}

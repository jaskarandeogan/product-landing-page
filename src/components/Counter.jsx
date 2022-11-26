import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return <div className="h-[50px] w-[157px] flex justify-between items-center background">
    <button onClick={handleDecrement} className="p-4 text-[orange]">-</button>
    <span>{count}</span>
    <button onClick={handleIncrement} className="p-4 text-[orange]">+</button>
  </div>;
}

export default Counter;

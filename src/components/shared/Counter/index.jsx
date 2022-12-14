import React from "react";

function Counter({ size, setQuantity }) {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setQuantity(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setQuantity(count - 1);
    }
  };

  return (
    <div className="h-[50px] flex justify-between items-center background">
      <button
        onClick={handleDecrement}
        className="p-4 text-[orange] text-2xl font-semibold"
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={handleIncrement}
        className="p-4 text-[orange] text-2xl font-semibold"
      >
        +
      </button>
    </div>
  );
}

export default Counter;

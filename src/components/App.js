import React, { useEffect, useRef, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const prevNum = useRef(0);

  useEffect(() => {
    if (input === "") {
      // Input cleared — reset prev so the next number adds fresh
      prevNum.current = 0;
      return;
    }
    const num = Number(input);
    if (!isNaN(num)) {
      setResult((prev) => prev + num - prevNum.current);
      prevNum.current = num;
    }
  }, [input]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={input}
        placeholder="Enter a number"
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{result}</p>
    </div>
  );
};

export default App;



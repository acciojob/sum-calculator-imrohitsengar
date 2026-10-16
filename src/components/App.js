import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  useEffect(() => {
    if (input) {
      setResult(input.split(",").reduce((acc, num) => acc + Number(num), 0));
    } else {
      setResult(0);
    }
  }, [input]);
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{result}</p>
    </div>
  );
};

export default App;

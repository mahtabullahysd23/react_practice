import { useState } from "react";
import Display from "./display";
import Button from "./button";

const CalculatorApp = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        {buttons.map((buttonLabel) => {
          let className = "";
          switch (buttonLabel) {
            case "C":
              className = "clear";
              break;
            case "=":
              className = "equal";
              break;
            default:
              className = "";
          }
          return (
            <Button
              key={buttonLabel}
              label={buttonLabel}
              onClick={handleButtonClick}
              className={className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalculatorApp;

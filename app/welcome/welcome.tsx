import { useState } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { calculateCalculation } from "./welcome.utils";


type Calculation = number | string;

export function Welcome() {
  const [number, setNumber] = useState < string > ("");
  const [calculations, setCalculations] = useState < Calculation[] > ([]);

  const updateNumber = (value: number) => {
    setNumber(number + value.toString());
  };

  const updateOperator = (operator: string) => {
    setCalculations([...calculations, Number(number), operator]);
    setNumber("");
  };


  const runCalculation = () => {
    const result = calculateCalculation([...calculations, Number(number)]);
    setCalculations([result]);
    setNumber("");
  };

  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <h1 className="text-4xl font-bold">{calculations} {number}</h1>
      <button onClick={() => updateNumber(1)}>1</button>
      <button onClick={() => updateNumber(2)}>2</button>
      <button onClick={() => updateNumber(3)}>3</button>
      <button onClick={() => updateNumber(4)}>4</button>

      <button onClick={() => updateOperator("+")}>+</button>
      <button onClick={runCalculation}>=</button>
    </main>
  );
}



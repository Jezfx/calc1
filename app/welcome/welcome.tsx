import { useState } from "react";
import { calculateCalculation } from "./welcome.utils";
import type { Calculation } from "./welcome.types";

export function Welcome() {
  const [number, setNumber] = useState < string > ("");
  const [calculations, setCalculations] = useState < Calculation[] > ([]);

  const updateNumber = (value: string) => {
    setNumber(number + value);
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

  const CalcButton = ({
    children,
    onClick,
    className = "",
  }: {
    children: React.ReactNode
    onClick: () => void
    className?: string
  }) => (
    <button
      onClick={onClick}
      className={`
        aspect-square rounded-full flex items-center justify-center text-2xl font-light transition-all duration-150 active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  )

  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <div className="mx-auto max-w-sm p-6">
        <div className="rounded-3xl bg-black p-6 shadow-2xl">
          {/* Display */}
          <div className="mb-8 px-4 py-8">
            <div className="text-right text-6xl font-thin text-white min-h-[4rem] flex items-end justify-end">
              {calculations} {number}
            </div>
          </div>

          {/* Button Grid */}
          <div className="grid grid-cols-4 gap-4">

            {/* Row 2 */}
            <CalcButton onClick={() => updateNumber("7")} className="bg-gray-700 hover:bg-gray-600 text-white">
              7
            </CalcButton>
            <CalcButton onClick={() => updateNumber("8")} className="bg-gray-700 hover:bg-gray-600 text-white">
              8
            </CalcButton>
            <CalcButton onClick={() => updateNumber("9")} className="bg-gray-700 hover:bg-gray-600 text-white">
              9
            </CalcButton>
            <CalcButton onClick={() => updateOperator("/")} className="bg-orange-500 hover:bg-orange-400 text-white">
              ÷
            </CalcButton>


            {/* Row 3 */}
            <CalcButton onClick={() => updateNumber("4")} className="bg-gray-700 hover:bg-gray-600 text-white">
              4
            </CalcButton>
            <CalcButton onClick={() => updateNumber("5")} className="bg-gray-700 hover:bg-gray-600 text-white">
              5
            </CalcButton>
            <CalcButton onClick={() => updateNumber("6")} className="bg-gray-700 hover:bg-gray-600 text-white">
              6
            </CalcButton>
            <CalcButton onClick={() => updateOperator("*")} className="bg-orange-500 hover:bg-orange-400 text-white">
              ×
            </CalcButton>

            {/* Row 4 */}
            <CalcButton onClick={() => updateNumber("1")} className="bg-gray-700 hover:bg-gray-600 text-white">
              1
            </CalcButton>
            <CalcButton onClick={() => updateNumber("2")} className="bg-gray-700 hover:bg-gray-600 text-white">
              2
            </CalcButton>
            <CalcButton onClick={() => updateNumber("3")} className="bg-gray-700 hover:bg-gray-600 text-white">
              3
            </CalcButton>
            <CalcButton onClick={() => updateOperator("-")} className="bg-orange-500 hover:bg-orange-400 text-white">
              -
            </CalcButton>

            {/* Row 5 */}
            <CalcButton onClick={() => updateNumber("0")} className="bg-gray-700 hover:bg-gray-600 text-white">
              0
            </CalcButton>
            <CalcButton onClick={() => updateOperator("%")} className="bg-orange-500 hover:bg-orange-400 text-white">
              %
            </CalcButton>
            <CalcButton onClick={runCalculation} className="bg-orange-500 hover:bg-orange-400 text-white">
              =
            </CalcButton>
            <CalcButton onClick={() => updateOperator("+")} className="bg-orange-500 hover:bg-orange-400 text-white">
              +
            </CalcButton>
          </div>
        </div>
      </div>
    </main>
  );
}



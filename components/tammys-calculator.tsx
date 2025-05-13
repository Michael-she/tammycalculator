"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function TammysCalculator() {
  const [display, setDisplay] = useState("0")
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const clearDisplay = () => {
    setDisplay("0")
    setWaitingForOperand(false)
  }

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? digit : display + digit)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".")
    }
  }

  const handleOperator = () => {
    setWaitingForOperand(true)
  }

  const calculateResult = () => {
    // Always return "Hello world" regardless of the calculation
    setDisplay("Hello world")
    setWaitingForOperand(true)
  }

  const handleButtonPress = (value: string) => {
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        inputDigit(value)
        break
      case ".":
        inputDecimal()
        break
      case "=":
        calculateResult()
        break
      case "+":
      case "-":
      case "×":
      case "÷":
        handleOperator()
        break
      case "AC":
        clearDisplay()
        break
      case "←":
        setDisplay(display.slice(0, -1) || "0")
        break
      default:
        break
    }
  }

  // Define button layout
  const buttons = [
    { value: "AC", colSpan: 2, className: "bg-red-100 hover:bg-red-200" },
    { value: "←", className: "bg-gray-200 hover:bg-gray-300" },
    { value: "÷", className: "bg-purple-100 hover:bg-purple-200" },
    { value: "7", className: "bg-white hover:bg-gray-100" },
    { value: "8", className: "bg-white hover:bg-gray-100" },
    { value: "9", className: "bg-white hover:bg-gray-100" },
    { value: "×", className: "bg-purple-100 hover:bg-purple-200" },
    { value: "4", className: "bg-white hover:bg-gray-100" },
    { value: "5", className: "bg-white hover:bg-gray-100" },
    { value: "6", className: "bg-white hover:bg-gray-100" },
    { value: "-", className: "bg-purple-100 hover:bg-purple-200" },
    { value: "1", className: "bg-white hover:bg-gray-100" },
    { value: "2", className: "bg-white hover:bg-gray-100" },
    { value: "3", className: "bg-white hover:bg-gray-100" },
    { value: "+", className: "bg-purple-100 hover:bg-purple-200" },
    { value: "0", className: "bg-white hover:bg-gray-100" },
    { value: ".", className: "bg-white hover:bg-gray-100" },
    { value: "=", className: "bg-blue-100 hover:bg-blue-200" },
  ]

  return (
    <Card className="w-full max-w-[320px] shadow-lg overflow-hidden">
      {/* Display */}
      <div className="bg-gray-100 border-b p-4">
        <div className="text-right h-12 overflow-x-auto flex items-center justify-end">
          <div className="text-2xl font-mono">{display}</div>
        </div>
      </div>

      {/* Keypad */}
      <div className="p-2 bg-gray-50">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px",
          }}
        >
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonPress(button.value)}
              className={`
                ${button.className}
                ${button.colSpan === 2 ? "col-span-2" : ""}
                flex items-center justify-center
                border border-gray-200 rounded-md
                font-medium text-lg
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-gray-400
              `}
              style={{
                gridColumn: button.colSpan === 2 ? "span 2" : "span 1",
                aspectRatio: button.colSpan === 2 ? "2/1" : "1/1",
              }}
            >
              {button.value}
            </button>
          ))}
        </div>
      </div>
    </Card>
  )
}

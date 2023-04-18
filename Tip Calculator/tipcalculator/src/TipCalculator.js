import React, { useState } from "react";
import "./TipCalculator.css";

function TipCalculator() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  function handleBillAmountChange(event) {
    setBillAmount(event.target.value);
  }

  function handleTipPercentageChange(event) {
    const newTipPercentage = event.target.value;
    const newTipAmount = billAmount * (newTipPercentage / 100);
    const newTotalAmount = parseFloat(billAmount) + parseFloat(newTipAmount);

    setTipPercentage(newTipPercentage);
    setTipAmount(newTipAmount.toFixed(2));
    setTotalAmount(newTotalAmount.toFixed(2));
  }

  function handleTipButtonClick(tipPercentage) {
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);

    setTipPercentage(tipPercentage);
    setTipAmount(tipAmount.toFixed(2));
    setTotalAmount(totalAmount.toFixed(2));
  }

  return (
    <div className="tip-calculator-container">
      <h1>Tip Calculator</h1>

      <div className="input-container">
        <label>
          Bill Amount:
          <input
            type="number"
            value={billAmount}
            onChange={handleBillAmountChange}
          />
        </label>

        <div className="tip-buttons-container">
          <button onClick={() => handleTipButtonClick(10)}>10%</button>
          <button onClick={() => handleTipButtonClick(15)}>15%</button>
          <button onClick={() => handleTipButtonClick(20)}>20%</button>
          <button onClick={() => handleTipButtonClick(25)}>25%</button>
          <button onClick={() => handleTipButtonClick(27)}>27%</button>
        </div>

        <label>
          Custom Tip Percentage:
          <input
            type="range"
            min="1"
            max="50"
            value={tipPercentage}
            onChange={handleTipPercentageChange}
          />
          {tipPercentage}%
        </label>
      </div>

      <div className="result-container">
        <p>Tip Amount: ${tipAmount}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
}

export default TipCalculator;

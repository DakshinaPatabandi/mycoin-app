import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarNew from "./NavbarNew";
import "../App.css";

const MyCoinAI = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const [request, setRequest] = useState("");
  const [data, setData] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [price, setPrice] = useState("");

  // Update prompt whenever totalIncome or totalExpense changes
  useEffect(() => {
    setPrompt(`By considering the total income = ${totalIncome} and total expenses = ${totalExpense} provided, please give me a recommendation that can I afford what I'm going to buy when I provide the price here. The price of the item = ${price}`);
  }, [totalIncome, totalExpense]);


  const handleGenerateRequest = async (e) => {
    e.preventDefault();
    const price = e.target.form.elements["totalExpenses"].value;
    setPrice(price);
    
    const updatedPrompt = `By considering the total income = ${totalIncome} and total expenses = ${totalExpense} provided, please give me a recommendation that can I afford what I'm going to buy when I provide the price here. The price of the item = ${price}`;
    setPrompt(updatedPrompt)
    
    try {
      const response = await fetch("http://localhost:8801/MyCoinAI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: updatedPrompt }),
      });
  
      if (response.ok) {
        const result = await response.json();
        setRequest(result.text);
        setData(true);
      } else {
        console.error("Failed to generate story:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  

  useEffect(() => {
    const fetchTotalIncomeAndExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:8801/MyCoinAI", {
          withCredentials: true,
        });
        console.log("Response:", response.data); // Add this line to log response data
        setTotalIncome(response.data.totalIncome || 0);
        setTotalExpense(response.data.totalExpense || 0);
      } catch (error) {
        console.error("Error fetching total income and expenses:", error);
      }
    };

    fetchTotalIncomeAndExpenses();
  }, []);

  return (
    <div>
      <NavbarNew />
      <div className="aboutbox">
        <h1 className="pt-5 MyCoinAiText">What is MyCoin AI?</h1>
        <p className="MyCoinAiSubText">
          Description: You can use this application and make your money
          transactions very accurately and it will be easy for you to make very
          accurate decisions. Ai technology will give you the financial
          knowledge you need and you will no longer be fooled by scams. Use
          MyCion AI technology now. 
        </p>
      </div>
      <div className="container mt-2 justify-content-center align-items-center d-flex">
        <div className="mt-5 justify-content-center align-items-center rounded-2 p-5 formbox-Expences">
          <h5>MyCoin AI</h5>
          <form action="">
            <div className="mb-3">
              <label className="form-label">
                <strong>Total Income</strong>
              </label>
              <input
                type="text"
                required
                name="totalIncome"
                className="form-control rounded-0"
                value={totalIncome}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Total Expenses</strong>
              </label>
              <input
                type="text"
                required
                name="totalExpenses"
                className="form-control rounded-0"
                value={totalExpense}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Total Expenses</strong>
              </label>
              <textarea
                type="text"
                required
                placeholder="What are you thinking to buy?"
                className="form-control rounded-0"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleGenerateRequest}
                className="flex justify-center mt-6 rounded-md bg-[#2a9d8f] py-2 px-10 text-sm font-semibold  text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Generate
              </button>
            </div>
          </form>
          <p>{request}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCoinAI;

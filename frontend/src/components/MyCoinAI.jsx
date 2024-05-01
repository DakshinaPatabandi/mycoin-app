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

  const handleGenerateRequest = async (e) => {
    e.preventDefault();
    const itemPrice = e.target.form.elements["itemPrice"].value;
    setPrice(itemPrice);

    // Update the prompt with the latest price
    const updatedPrompt = `By considering the total income = ${totalIncome}, total expenses = ${totalExpense} and the remaining amount to do anything = ${
      totalIncome - totalExpense
    } provided, please tell me whether I can afford what I'm going to buy when I provide the price. The price = ${itemPrice}. Assume only these are considering for the recommendation.`;

    setPrompt(updatedPrompt);

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

      <div>
        <div
          className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 justify-center items-center duration-200 */}
        {/* Background patten"
        >
          {/* Background patten */}
          <div className=" h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

          <div className="py-10 mb-10">
            <div className="container">
              {/* Header Section */}
              <div className="text-center my-15 ">
                <p data-aos="fade-up" className="text-sm text-yellow-600">
                  Hello!!!
                </p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">
                  Explore with AI Technology
                </h1>
                <p data-aos="fade-up" className="text-s text-gray-800">
                  You can use this application and make your money transactions
                  very accurately and it will be easy for you to make very
                  accurate decisions. AI technology will give you the financial
                  knowledge you need and you will no longer be fooled by scams.
                  Use MyCoin AI technology now.
                </p>
              </div>
            </div>

            <div className="container mt-2 justify-content-center align-items-center d-flex">
              <div className="justify-content-center align-items-center rounded-2 p-5 formbox-Expences">
                {/* <h5>MyCoin AI</h5> */}
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
                      <strong>Price of the Item</strong>
                    </label>
                    <input
                      type="text"
                      required
                      name="itemPrice"
                      placeholder="Enter the price of the item"
                      className="form-control rounded-0"
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
        </div>
      </div>
    </div>
  );
};

export default MyCoinAI;

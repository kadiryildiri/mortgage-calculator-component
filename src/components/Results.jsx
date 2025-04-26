import React, { useState, useEffect } from "react";
import empty from "../assets/images/illustration-empty.svg";

function Results({ values }) {
  const { amount, term, interestRate, mtype } = values || {};
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    if (monthlyPayment && term) {
      setTotalPayment((monthlyPayment * term) / 12);
    }
  }, [monthlyPayment, term]);

  useEffect(() => {
    if (amount && term && interestRate) {
      setMonthlyPayment(
        (amount * interestRate) / (1 - Math.pow(1 + interestRate, -term))
      );
    }
  }, [amount, term, interestRate]);

  return (
    <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:h-[500px] xl:w-[450px]">
      {values ? (
        <div className="bg-slate-900 px-6 py-6 h-full flex flex-col xl:rounded-bl-[65px] xl:rounded-r-2xl">
          <p className="text-white text-xl font-medium">Your results</p>
          <p className="text-slate-500 mt-2">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
          <div className="flex flex-col gap-2 bg-slate-950/50 px-3 py-3 mt-5 border-t-4 border-lime ">
            <p className="text-slate-500">Your monthly repayments</p>
            <p className="text-lime text-4xl font-medium">
              £{monthlyPayment.toLocaleString("en-US")}
            </p>
            <hr className="w-full text-slate-700 h-0.5 mt-2" />
            <p className="text-slate-500">Total you'll repay over the term</p>
            <p className="text-white text-2xl font-medium">
              £{totalPayment.toLocaleString("en-US")}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 flex flex-col items-center py-6 px-6 h-full justify-center xl:rounded-bl-[65px] xl:rounded-r-2xl">
          <img src={empty} alt="calculator illustration" />
          <p className="text-white text-center mt-2 text-2xl font-bold">
            Result shown here
          </p>
          <p className="text-slate-500 text-center mt-4">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </div>
  );
}

export default Results;

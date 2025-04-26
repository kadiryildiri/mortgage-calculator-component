import React, { useState } from "react";
import { useFormik } from "formik";
import calculatorSvg from "../assets/images/icon-calculator.svg";
import { calculatorFormSchema } from "../schemas/CalculatorFormSchemas";
import Radio from "@mui/material/Radio";

function Calculator({ handleValues }) {
  const submit = (values, action) => {
    handleValues(values);
    setTimeout(() => {
      action.resetForm();
    }, 500);
  };
  const reset = () => {
    setFieldValue("amount", "");
    setFieldValue("term", "");
    setFieldValue("interestRate", "");
    setFieldValue("mtype", "");
  };
  const { values, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        amount: "",
        term: "",
        interestRate: "",
        mtype: "",
      },
      validationSchema: calculatorFormSchema,
      onSubmit: submit,
    });

  return (
    <div className=" px-6 py-6 xl:flex xl:flex-col xl:items-center xl:justify-center xl:w-[500px] xl:bg-white xl:p-3 xl:pr-24 xl:rounded-l-2xl">
      <div className="xl:flex xl:items-center xl:justify-between mb-6 xl:w-full xl:mb-0">
        <h1 className="font-bold text-xl text-slate-900">
          Mortgage Calculator
        </h1>
        <button
          onClick={reset}
          className="text-slate-700 underline decoration-dotted hover:cursor-pointer"
        >
          Clear All
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 py-6 xl:w-full xl:h-112 xl:pb-0"
      >
        <div>
          <label className="text-slate-700">Mortgage Amount</label>
          <div className="relative xl:-z-0 ">
            <span
              className={`absolute -z-10 inset-y-0 left-0 flex items-center px-3  rounded-l-sm ${
                errors.amount
                  ? "bg-red text-white"
                  : "bg-slate-100 text-gray-500 "
              }`}
            >
              £
            </span>
            <input
              type="number"
              id="amount"
              value={values.amount}
              onChange={handleChange}
              className={`relative z-10 w-full border rounded-sm py-2 pl-9 outline-0 hover:cursor-pointer no-spin ${
                errors.amount ? "border-red" : "border-slate-700"
              }`}
            />
          </div>
          {errors.amount && (
            <p className="text-red text-sm mt-1">{errors.amount}</p>
          )}
        </div>
        <div className="flex flex-col gap-5 xl:flex-row">
          <div className="xl:-z-0">
            <label className="text-slate-700">Mortgage Term</label>
            <div className="relative">
              <span
                className={`absolute -z-10 inset-y-0 right-0 px-3 flex items-center rounded-r-sm ${
                  errors.term
                    ? "bg-red text-white"
                    : "text-gray-500 bg-slate-100"
                }`}
              >
                years
              </span>
              <input
                type="number"
                id="term"
                value={values.term}
                onChange={handleChange}
                className={`w-full border rounded-sm py-2 pl-3 outline-0 hover:cursor-pointer no-spin ${
                  errors.term ? "border-red" : "border-slate-700"
                }`}
              />
            </div>
            {errors.term && (
              <p className="text-red text-sm mt-1">{errors.term}</p>
            )}
          </div>
          <div>
            <label className="text-slate-700">Interest Rate</label>
            <div className="relative xl:-z-0">
              <span
                className={`absolute -z-10 inset-y-0 right-0 px-3 flex items-center  rounded-r-sm ${
                  errors.interestRate
                    ? "bg-red text-white"
                    : "text-gray-500 bg-slate-100"
                }`}
              >
                %
              </span>
              <input
                type="number"
                id="interestRate"
                value={values.interestRate}
                onChange={handleChange}
                className={`w-full border rounded-sm py-2 pl-3 outline-0 hover:cursor-pointer no-spin ${
                  errors.interestRate ? "border-red" : "border-slate-700"
                }`}
              />
            </div>
            {errors.interestRate && (
              <p className="text-red text-sm mt-1">{errors.interestRate}</p>
            )}
          </div>
        </div>
        <div>
          <label>Mortgage Type</label>
          <div className="flex flex-col gap-3">
            <label
              className={`py-1 px-4 border rounded-lg flex items-center justify-start font-medium cursor-pointer  ${
                values.mtype === "repayment"
                  ? "bg-lime/10 border-lime"
                  : "border-slate-700"
              } hover:border-blue-400`}
            >
              <Radio
                name="mtype"
                value="repayment"
                checked={values.mtype === "repayment"}
                onClick={() => setFieldValue("mtype", "repayment")}
                color="success"
              />
              Repayment
            </label>
            <label
              className={`py-1 px-4 border rounded-lg flex items-center justify-start font-medium cursor-pointer ${
                values.mtype === "interest"
                  ? "bg-lime/10 border-lime"
                  : "border-slate-700"
              } hover:border-blue-400`}
            >
              <Radio
                name="mtype"
                value="interest"
                checked={values.mtype === "interest"}
                onClick={() => setFieldValue("mtype", "interest")}
                color="success"
              />
              Interest Only
            </label>
          </div>
          {errors.mtype && (
            <p className="text-red text-sm mt-1">{errors.mtype}</p>
          )}
        </div>
        <div className="relative flex items-center">
          <img
            src={calculatorSvg}
            alt="calculator icon"
            className="absolute inset-y-0 left-13 py-3"
          />
          <button
            type="submit"
            className="w-full bg-lime rounded-4xl py-3 hover:cursor-pointer"
          >
            Calculate Repayments
          </button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;

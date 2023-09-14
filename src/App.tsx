// src/BankieApp.tsx
import React, { useReducer } from "react";

type Action =
  | { type: "OPEN_ACCOUNT"; initialBalance: number }
  | { type: "DEPOSIT"; amount: number }
  | { type: "WITHDRAW"; amount: number }
  | { type: "REQUEST_LOAN"; amount: number }
  | { type: "PAY_LOAN"; amount: number }
  | { type: "CLOSE_ACCOUNT" };

interface State {
  openingBalance: number;
  loanBalance: number;
  currentBalance: number;
}

const initialState: State = {
  openingBalance: 0,
  loanBalance: 0,
  currentBalance: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "OPEN_ACCOUNT":
      return {
        ...state,
        openingBalance: action.initialBalance,
        currentBalance: action.initialBalance,
      };
    case "DEPOSIT":
      return {
        ...state,
        currentBalance: state.currentBalance + action.amount,
      };
    case "WITHDRAW":
      return {
        ...state,
        currentBalance: state.currentBalance - action.amount,
      };
    case "REQUEST_LOAN":
      return {
        ...state,
        loanBalance: state.loanBalance + action.amount,
        currentBalance: state.currentBalance + action.amount,
      };
    case "PAY_LOAN":
      return {
        ...state,
        loanBalance: state.loanBalance - action.amount,
        currentBalance: state.currentBalance - action.amount,
      };
    case "CLOSE_ACCOUNT":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const BankieApp: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpenAccount = (initialBalance: number) => {
    dispatch({ type: "OPEN_ACCOUNT", initialBalance });
  };

  const handleDeposit = (amount: number) => {
    dispatch({ type: "DEPOSIT", amount });
  };

  const handleWithdraw = (amount: number) => {
    dispatch({ type: "WITHDRAW", amount });
  };

  const handleRequestLoan = (amount: number) => {
    dispatch({ type: "REQUEST_LOAN", amount });
  };

  const handlePayLoan = (amount: number) => {
    dispatch({ type: "PAY_LOAN", amount });
  };

  const handleCloseAccount = () => {
    dispatch({ type: "CLOSE_ACCOUNT" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Bankie</h1>
        <p>Opening Balance: {state.openingBalance}</p>
        <p>Loan Balance: {state.loanBalance}</p>
        <p>Current Balance: {state.currentBalance}</p>

        <button onClick={() => handleOpenAccount(1000)}>Open Account</button>
        <button onClick={() => handleDeposit(100)}>Deposit</button>
        <button onClick={() => handleWithdraw(50)}>Withdraw</button>
        <button onClick={() => handleRequestLoan(500)}>Request Loan</button>
        <button onClick={() => handlePayLoan(200)}>Pay Loan</button>
        <button onClick={handleCloseAccount}>Close Account</button>
      </div>
    </div>
  );
};

export default BankieApp;

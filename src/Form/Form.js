import React from "react";

const Form = ({ info, setInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const amount = e.target.amount.value;
    const payment = e.target.payment.value;
    const remark = e.target.remark.value;
    setInfo((pre) => [...pre, { date, amount, payment, remark }]);
    e.target.reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "left", fontSize: "18px" }}>
          <u>Receipt Details</u>
        </h2>
        <div className="input-group">
          <label htmlFor="date">Receipt Date</label>
          <input placeholder="Enter Date (dd/mm/yy)" type="" name="date" />
        </div>
        <div className="input-group">
          <label htmlFor="date">Amount</label>
          <input placeholder="Enter Amount (in INR)" type="" name="amount" />
        </div>
        <div className="input-group">
          <label for="payment">Payment Mode</label>
          <select name="payment">
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Google pay</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="date">Remark</label>
          <input placeholder="Enter Remark" type="" name="remark" />
        </div>
        <button className="btn submit" type="submit">
          Submit
          <br />
          <span>ctrl S</span>
        </button>
        <button className="btn cancel" type="reset">
          Cancel
          <br />
          <span>ESC</span>
        </button>
      </form>
    </div>
  );
};

export default Form;

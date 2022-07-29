import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <h2 style={{ textAlign: "left", fontSize: "18px" }}>
        <u>Receipt Details</u>
      </h2>
      <div className="input-group">
        <label htmlFor="date">Receipt Date</label>
        <input type="" name="date" />
      </div>
      <div className="input-group">
        <label htmlFor="date">Amount</label>
        <input type="" name="date" />
      </div>
      <div className="input-group">
        <label htmlFor="date">Payment Mode</label>
        <input type="" name="date" />
      </div>
      <div className="input-group">
        <label htmlFor="date">Remark</label>
        <input type="" name="date" />
      </div>
    </div>
  );
};

export default Form;

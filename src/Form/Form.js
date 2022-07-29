import React from "react";

const Form = () => {
  return (
    <div className="form-container">
      <form>
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
          <label for="payment">Payment Mode</label>
          <select name="payment">
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Google pay</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="date">Remark</label>
          <input type="" name="date" />
        </div>
        <button className="btn submit" type="submit">
          Submit
        </button>
        <button className="btn cancel" type="submit">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;

import React from "react";

const FormList = ({ info }) => {
  return (
    <div>
      <table>
        <caption>Receipt list</caption>
        <thead>
          <tr className="tr">
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Remark</th>
          </tr>
        </thead>
        {info.slice(0).map((data) => (
          <tr className="tr">
            <td>{data.date}</td>
            <td>{data.amount}</td>
            <td>{data.payment}</td>
            <td>{data.remark}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FormList;

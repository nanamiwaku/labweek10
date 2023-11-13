import React from "react";

const Submission = ({ data }) => {
  return (
    <div>
      <h2>Form Submission</h2>
      <p>Email: {data.email}</p>
      <p>Full Name: {data.fullName}</p>
      <p>Address: {data.address}</p>
      <p>Address 2: {data.address2}</p>
      <p>City: {data.city}</p>
      <p>Province: {data.province}</p>
      <p>Postal Code: {data.postalCode}</p>
    </div>
  );
};

export default Submission;

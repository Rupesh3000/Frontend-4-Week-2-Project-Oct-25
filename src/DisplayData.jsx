import React from "react";

const DisplayData = ({ data }) => {
  return (
    <div>
      {data.map((office, index) => (
        <div key={index} className="office-card">
          <h3>Post Office Details</h3>
          <p>
            <strong>Name:</strong> {office.Name}
          </p>
          <p>
            <strong>Pincode:</strong> {office.Pincode}
          </p>
          <p>
            <strong>District:</strong> {office.District}
          </p>
          <p>
            <strong>State:</strong> {office.State}
          </p>
          <p>
            <strong>Branch Type:</strong> {office.BranchType}
          </p>
          <p>
            <strong>Delivery Status:</strong> {office.DeliveryStatus}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DisplayData;

import React, { useState } from "react";

const DisplayData = ({ data, userInput, numberOfMeassage }) => {
  const [filter, setFilter] = useState("");

  const filteredData = data.filter((office) =>
    office.Name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Pincode: {userInput}</h2>
      <b>Message: </b>
      <span>{numberOfMeassage}</span>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Filter by post office name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />

      <div className="office-container">
        {filteredData.length > 0 ? (
          filteredData.map((office, index) => (
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
              <p>
                <strong>Division:</strong> {office.Division}
              </p>
            </div>
          ))
        ) : (
          <p>Couldn’t find the postal data you’re looking for…</p>
        )}
      </div>
    </div>
  );
};

export default DisplayData;

import React from "react";

const UserInput = ({ fetchPincodeData, userInput, setUserInput }) => {
  return (
    <div>
      <h1>Enter Pincode</h1>
      <input
        type="text"
        name=""
        className="input-field"
        placeholder="Pincode"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={fetchPincodeData}>Lookup</button>
    </div>
  );
};

export default UserInput;

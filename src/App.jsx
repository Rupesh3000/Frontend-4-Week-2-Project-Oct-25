import React, { useState } from "react";
import UserInput from "./UserInput";
import DisplayData from "./DisplayData";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [pincodeData, setPincodeData] = useState(null);
  const [error, setError] = useState("");
  const [numberOfMeassage, setNumberOfMessage] = useState("");

  const fetchPincodeData = async () => {
    if (6 !== userInput.length) {
      alert("Code is not 6 digits");
      return;
    }

    setLoading(true);
    setError("");
    setPincodeData(null);

    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${userInput}`
      );
      const data = await response.json();

      if (data[0].Status === "Error") {
        setError(data[0].Message || "Pincode not found");
      } else if (data[0].PostOffice) {
        setNumberOfMessage(data[0].Message);
        setPincodeData(data[0].PostOffice);
      }
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  console.log(pincodeData);
  return (
    <div>
      {/* Show input only when no data and not loading */}
      {!pincodeData && !loading && (
        <UserInput
          fetchPincodeData={fetchPincodeData}
          userInput={userInput}
          setUserInput={setUserInput}
          loading={loading}
        />
      )}

      {/* Show loading during API call */}
      {loading && <p>Loading...</p>}

      {/* Show data when available */}
      {pincodeData && (
        <DisplayData
          data={pincodeData}
          userInput={userInput}
          numberOfMeassage={numberOfMeassage}
        />
      )}

      {/* Show error */}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;

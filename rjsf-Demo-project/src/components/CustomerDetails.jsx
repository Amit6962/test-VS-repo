import React, { useEffect, useState } from "react";

const CustomerDetails = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [customerData, setCustomerData] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const fetchCustomerData = () => {
    fetch(`http://localhost:5000/customers?accountNumber=${accountNumber}`)
      .then((response) => response.json())
      .then((json) => setCustomerData(json))
      .catch((e) => {
        console.error("Error fetching customer data:", error);
      });
  };

  // Handle input change for account number
  const handleInputChange = (e) => {
    setAccountNumber(e.target.value);
  };

  // Handle the selection of a person
  const handlePersonSelection = (person) => {
    setSelectedPerson(person);
  };

  useEffect(() => {
    setSelectedPerson(null);
    setCustomerData([]);
  }, [accountNumber]);

  const renderPersonDetailsForm = () => {
    if (!selectedPerson) return null;

    return (
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={selectedPerson.name} readOnly />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={selectedPerson.email} readOnly />
        </div>
        <div>
          <label>Mobile:</label>
          <input type="tel" value={selectedPerson.mobile} readOnly />
        </div>
        <div>
          <label>RelationshipStatus:</label>
          <input
            type="text"
            value={selectedPerson.relationshipStatus}
            readOnly
          />
        </div>
      </form>
    );
  };

  return (
    <div>
      <h1>Customer Details</h1>

      <div>
        <label>Account Number:</label>
        <input type="text" value={accountNumber} onChange={handleInputChange} />
        <button onClick={fetchCustomerData}>Fetch Customer Data</button>
      </div>

      {/* Display joint account holders */}
      {customerData[0]?.jointAccountHolders &&
        customerData[0]?.jointAccountHolders.map((person, index) => (
          <div key={index}>
            <input
              type="radio"
              name="person"
              value={person.name}
              onChange={() => handlePersonSelection(person)}
            />
            {person.name} | {person.relationshipStatus}
          </div>
        ))}

      {/* Display the selected person's details */}
      {renderPersonDetailsForm()}
    </div>
  );
};

export default CustomerDetails;

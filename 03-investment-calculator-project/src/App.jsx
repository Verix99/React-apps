import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userNumber, setUserNumber] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(inputIdentifier, newValue) {
    setUserNumber((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  const inputValid = userNumber.duration >= 1;

  return (
    <>
      <Header />
      <UserInput handleUserInput={handleUserInput} userNumber={userNumber} />
      {inputValid ? (
        <Results data={userNumber} />
      ) : (
        <p className="center">Please enter a duration greater than zero</p>
      )}
    </>
  );
}

export default App;

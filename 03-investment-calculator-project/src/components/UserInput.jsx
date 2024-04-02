function userInput({ handleUserInput, userNumber }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invesment</label>
          <input
            type="number"
            value={userNumber.initialInvestment}
            onChange={(event) =>
              handleUserInput("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Invesment</label>
          <input
            type="number"
            value={userNumber.annualInvestment}
            onChange={(event) =>
              handleUserInput("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userNumber.expectedReturn}
            onChange={(event) =>
              handleUserInput("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userNumber.duration}
            onChange={(event) =>
              handleUserInput("duration", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}

export default userInput;

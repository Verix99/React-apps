import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ data }) {
  const reslutData = calculateInvestmentResults(data);
  const initialInvestment =
    reslutData[0].valueEndOfYear -
    reslutData[0].interest -
    reslutData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th>
          <th>Total Increast</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {reslutData.map((yearData, yearDataIndex) => {
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalIntrest;

          return (
            <tr key={yearDataIndex}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;

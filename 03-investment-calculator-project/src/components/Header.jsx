import logo from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing money in bag" />
      <h1>Investiční kalkulačka</h1>
    </header>
  );
}

export default Header;

// src/components/Header.tsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Open Account</Link>
        </li>
        <li>
          <Link to="/deposit">Deposit</Link>
        </li>
        <li>
          <Link to="/withdraw">Withdraw</Link>
        </li>
        <li>
          <Link to="/loan">Loan</Link>
        </li>
        <li>
          <Link to="/close-account">Close Account</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

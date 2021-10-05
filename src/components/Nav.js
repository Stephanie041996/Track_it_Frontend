import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd, faMoneyBill, faPiggyBank, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faMoneyBill} />
const element1 = <FontAwesomeIcon icon={faHandHoldingUsd} />
const element2 = <FontAwesomeIcon icon={faPiggyBank} />
const element3 = <FontAwesomeIcon icon={faSignOutAlt} />
const Nav = () => {

  return (
    <nav>
      <div className="bottom-nav">
        <Link to="/add" className="button-wrapper">
        {element1}
          <p>Add Transaction</p>
        </Link>
        <Link to="/dashboard" className="button-wrapper">
        {element2}
          <p>Track It </p>
        </Link>
        
        <Link to="/progress/1" className="button-wrapper">
        {element}
          <p>Expenses</p>
        </Link>
        <Link to="/" className="button-wrapper">
     {element3}
          <p>Logout</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

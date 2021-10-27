import { Link } from 'react-router-dom';

const Topbanner = () => (
  <nav>
    <div className="top-nav">
      <Link to="/add">
        <p>Track It</p>
      </Link>

    </div>
  </nav>
);

export default Topbanner;

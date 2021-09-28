// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MeasurementItem = ({ id, category }) => (
//   <Link to={`/progress/${id}`} className="measurement-item">
    <div>
      <p className="name">{category}</p>
      <Link to={`/Crypto/${category.id}`}>View</Link>
    </div>
//   </Link>
);

MeasurementItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default MeasurementItem;
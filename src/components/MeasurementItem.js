 import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const MeasurementItem = ({ id, category }) => (
  <Link to={`/progress/${id}`} className="measurement-item">
    <div>
      <p className="name">{category}</p>
    </div>
  </Link>
);

MeasurementItem.propTypes = {
  id: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default MeasurementItem;
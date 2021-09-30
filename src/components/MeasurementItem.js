 import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const MeasurementItem = ({ id, icon, category }) => (
  <Link to={`/progress/${id}`} className="measurement-item">
    <img alt="Measurement Item" src={icon} />
    <div>
      <p className="name">{category}</p>
    </div>
  </Link>
);

MeasurementItem.propTypes = {
  id: PropTypes.number.isRequired,
 icon: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default MeasurementItem;
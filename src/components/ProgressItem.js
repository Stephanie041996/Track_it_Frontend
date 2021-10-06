import PropTypes from 'prop-types';

const formatDate = (string) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([], options);
};

const ProgressItem = ({ date, data }) => (
  <div className="progress-item">
    <p className="date">{formatDate(date)}</p>
    <p className="data">
      $
      {' '}
      {data}
    </p>
  </div>
);

ProgressItem.propTypes = {
  date: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};

export default ProgressItem;

import PropTypes from 'prop-types';

const formatDate = (string) => {
  const options = {
    year: 'numeric', month: 'long', day: 'numeric', HH: 'numeric', mm: 'numeric',
  };
  return new Date(string).toLocaleString([], options);
};
const formatTime = (string) => {
  const timestemp = new Date(string).toLocaleTimeString('en-US');
  return timestemp;
};

const ProgressItem = ({ date, time, data }) => (
  <div className="progress-item">
    <p className="date">
      <strong>
        {' '}
        {formatDate(date)}
      </strong>
      <br />
      <small>
        {formatTime(time)}
      </small>
    </p>
    <p className="data">
      $
      {' '}
      {data}
    </p>
  </div>
);

ProgressItem.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};

export default ProgressItem;

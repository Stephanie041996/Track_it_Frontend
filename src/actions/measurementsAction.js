import axios from 'axios';

const loadMeasurements = () => async (dispatch) => {
  axios
    .get('http://127.0.0.1:3001/measurements')
    .then(
      (response) => dispatch({
        type: 'FETCH_MEASUREMENTS',
        payload: {
          measurements: [...response.data],
        },
      }),
    );
};
export default loadMeasurements;
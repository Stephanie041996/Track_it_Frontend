import axios from 'axios';

const loadMeasurements = () => async (dispatch) => {
  axios
    .get('http://127.0.0.1:3000/measurements')
    .then(
      // (response) => console.log(response.data)
      (response) => dispatch({
        type: 'FETCH_MEASUREMENTS',
        payload: {
          measurements: [...response.data],
        },
      }),
    );
};
export default loadMeasurements;
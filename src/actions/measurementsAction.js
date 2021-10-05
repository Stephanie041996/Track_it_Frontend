import axios from 'axios';

const loadMeasurements = () => async (dispatch) => {
  axios
    .get('https://guarded-brushlands-05784.herokuapp.com/measurements')
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
import React from 'react';
// import { useEffect } from 'react';
 import { useSelector } from 'react-redux';
import MeasurementItem from '../components/MeasurementItem';
// import loadMeasurements from '../actions/measurementsAction';

const Measurements = () => {
  // Load measurements from state
  const measurements = useSelector((state) => state.measurements.measurements);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadMeasurements());
  // }, [dispatch]);

  return (
    <div className="measurements">
      {measurements.map((measurement) => (
        <MeasurementItem
          key={measurement.id}
          id={measurement.id}
          icon={measurement.icon}
          category={measurement.category}
        />
        
      ))}
    </div>
  );
};

export default Measurements;
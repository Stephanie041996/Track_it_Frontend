import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MeasurementItem from '../components/MeasurementItem';
import loadMeasurements from '../actions/measurementsAction';
import Nav from '../components/Nav';
import Topbanner from '../components/Topbanner';
import Banner from '../components/Banner';

const Measurements = () => {
  const measurements = useSelector((state) => state.measurements.measurements);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMeasurements());
  }, [dispatch]);

  return (
    <>
      <Topbanner />
      <div className="banner-section">
        <Banner />
      </div>

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
      <Nav />
    </>
  );
};

export default Measurements;

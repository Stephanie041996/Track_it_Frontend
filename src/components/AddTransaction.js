import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../Style/App.css';
import Nav from './Nav';
import Topbanner from './Topbanner';

const AddTransaction = () => {
  const [measurementId, setMeasurementId] = useState({
    id: 1,
  });

  const [transactionData, setTransactionData] = useState({
    data: 0.01,
  });

  const measurements = useSelector((state) => state.measurements.measurements);

  const history = useHistory();

  const handleSelectChange = (e) => {
    setMeasurementId({
      id: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    setTransactionData({
      data: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const payload = {
      measurement: {
        id: measurementId.id,
      },
      measure: {
        data: transactionData.data,
      },
    };
    axios
      .post(
        'https://guarded-brushlands-05784.herokuapp.com/measurements/',
        payload,
      )
      .then(() => {
        document.getElementById('measurement-input').value = '';
        history.push(`/progress/${measurementId.id}`);
      });
  };

  return (
    <>
    <Topbanner />
    <h2 className="Add-heading">PLEASE ENTER A TRANSACTION </h2>
    <div className="add-measure">
      <div className="container">
        <div className="select-wrapper">
          <select
            className='select-box'
            name="select-measurements"
            id="select-measurements"
            onChange={handleSelectChange}
          >
            {measurements.map((measurement) => (
              <option key={measurement.id} value={measurement.id}>
                {measurement.category}
              </option>
            ))}
          </select>
          <input
            className='input-box'
            id="measurement-input"
            type="number"
            step="0.01"
            min="0"
            placeholder="$50.01"
            onChange={handleInputChange}
          />
       
        <button type="submit" onClick={handleClick}>
          Add
        </button>
        </div>
      </div>
    </div>
    < Nav />
    </>
  );
};

export default AddTransaction;

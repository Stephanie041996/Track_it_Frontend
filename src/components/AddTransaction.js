import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddTransaction = () => {
  const [measurementId, setMeasurementId] = useState({
    id: 1,
  });

  const [transactionData, setTransactionData] = useState({
    data: 0.01,
  });
  // Load measurements from state
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
        'http://localhost:3001/measurements/',
        payload,
      )
      .then(() => {
        document.getElementById('measurement-input').value = '';
        history.push(`/progress/${measurementId.id}`);
      });
  };

  return (
    <div className="add-measure">
      <div className="container">
        <div className="select-wrapper">
          <select
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
            id="measurement-input"
            type="number"
            step="0.01"
            min="0"
            placeholder="$50.01"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTransaction;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProgressItem from '../components/ProgressItem';

// Turn your strings into dates, and then subtract them
// to get a value that is either negative, positive, or zero.
function sortObjByDate(array) {
  return array.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

const Progress = () => {
  const { measurementId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [transactionName, setTransactionName] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:3000/measurements/${measurementId}`,
      )
      .then((response) => {
        setTransactions(sortObjByDate(response.data.transactions));
        setTransactionName(response.data.category);
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="progress-container">
      <h3>
        Your
        {transactionName}
        {' '}
        Progress
      </h3>
      {transactions.map((transaction) => (
        <ProgressItem
          key={transaction.id}
          date={transaction.created_at}
          data={transaction.data}
        />
      ))}
    </div>
  );
};

export default Progress;
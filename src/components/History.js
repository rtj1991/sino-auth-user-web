import React, { useEffect, useState } from 'react';
import { getHistory } from '../api';
import './History.css';

const History = () => {
  const [history, setHistory] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getHistory(token);
        setHistory(data.data);
      } catch (error) {
        alert('Failed to fetch history');
      }
    };

    fetchHistory();
  }, [token]);

  return (
    <div className="history-container">
      <div className="history-header">Login History</div>
      <ul className="history-list">
        {history.length === 0 ? (
          <p>No login history found.</p>
        ) : (
          history.map((entry, index) => (
            <li key={index} className="history-item">
              <h4>User: {entry.user}</h4>
              <p>Status: {entry.status}</p>
              <p>Time: {entry.created}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default History;

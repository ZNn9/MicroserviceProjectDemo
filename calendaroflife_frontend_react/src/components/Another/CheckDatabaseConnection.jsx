// src/components/LoginButton.jsx
import React , { useState, useEffect } from 'react';
import axios from 'axios';

function CheckDatabaseConnection() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_CLIENT_URL}DatabaseTest/test-connection`); // Ví dụ endpoint: /api/users
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Check Database Conenction</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default CheckDatabaseConnection;

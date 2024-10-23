import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [issData, setIssData] = useState(null);

  useEffect(() => {
    // Hacemos la solicitud a nuestra API de FastAPI
    axios.get('http://127.0.0.1:8000/iss-now')
      .then(response => {
        setIssData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>ISS Tracker</h1>
      {issData ? (
        <div>
          <p><strong>Timestamp:</strong> {issData.timestamp}</p>
          <p><strong>Latitude:</strong> {issData.latitude}</p>
          <p><strong>Longitude:</strong> {issData.longitude}</p>
        </div>
      ) : (
        <p>Loading ISS data...</p>
      )}
    </div>
  );
}

export default App;

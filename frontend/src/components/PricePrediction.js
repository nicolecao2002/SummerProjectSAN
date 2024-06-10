import React, { useState } from 'react';

function PricePrediction ()
{
console.log('wtf')
  const [predictions, setPredictions] = useState(null);

  const makePrediction = async () => {
    // Replace with your actual server URL
    const apiUrl = 'http://localhost:5000/predict';

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPredictions(data.predictions);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div>
      <button onClick={makePrediction}>Make Prediction</button>
      {predictions && (
        <div>
          <h4>Predictions:</h4>
          <pre>{JSON.stringify(predictions, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default PricePrediction;

import React from 'react';

export default ({ loading, data, error }) => {
  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      {data.map(flightInfo => (
        <div>
          <h2> {flightInfo.airline} </h2>
          <p>
            Price: ${flightInfo.price}
            {' | '}
            Duration: {flightInfo.duration}
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};

// @flow
import React from 'react';

export default ({
  loading,
  data,
  error
}: {
  loading: boolean,
  data: Array<Object>,
  error: ?Error
}) => {
  if (error) {
    return <div>{error.message}</div>;
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

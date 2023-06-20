import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';

const ResultPage = () => {
  const [strategy, setStrategy] = useState(null);

  // Load the strategy from localStorage when the component mounts
  useEffect(() => {
    const loadedStrategy = localStorage.getItem('strategy');
    if (loadedStrategy) {
      setStrategy(JSON.parse(loadedStrategy));
    }
  }, []);

  if (!strategy) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Your Digital Marketing Strategy</Typography>
      {/* Display the strategy here */}
    </Container>
  );
};

export default ResultPage;

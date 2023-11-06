import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

interface Prop {
  amount : number
  finalAmount : number
}

const LinearDeterminate =({amount,finalAmount} : Prop) => {
  const [progress, setProgress] = React.useState((amount / finalAmount) * 100);


  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

export default LinearDeterminate
import React from 'react';
import Stepper from './Stepper';
import Step from './Step';
import StepIndicator from './StepIndicator';

const YourComponent = () => {
  return (
    <Stepper sx={{ width: '100%' }}>
      <Step
        indicator={<StepIndicator variant="solid" color="neutral">1</StepIndicator>}
      >
        Order placed
      </Step>
      <Step
        indicator={<StepIndicator variant="outlined">2</StepIndicator>}
      >
        In review
      </Step>
      <Step
        indicator={<StepIndicator>3</StepIndicator>}
      >
        Approved
      </Step>
    </Stepper>
  );
};

export default YourComponent;

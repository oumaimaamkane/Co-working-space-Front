import { useState } from "react";
import MembershipSelection from "./MembershipSelection";
import DateSelection  from "./DateSelection";
import ConfirmationStep from "./ConfirmationStep";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";

const ReservationSteps = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const steps = ["Select Membership", "Choose Date", "Confirm Details"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    // Handle reservation completion
    console.log("Reservation completed:", { selectedPlan, selectedDate });
    onClose();
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <MembershipSelection onSelect={setSelectedPlan} />;
      case 1:
        return <DateSelection onSelect={setSelectedDate} />;
      case 2:
        return (
          <ConfirmationStep
            selectedPlan={selectedPlan}
            selectedDate={selectedDate}
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleFinish}>Finish</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div style={{ marginTop: "20px" }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>

              <button
                type="button"
                className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={
                  activeStep === steps.length - 1 ? handleFinish : handleNext
                }
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationSteps;
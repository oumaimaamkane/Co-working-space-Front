import { useState } from "react";
import { Typography, Button } from "@mui/material";
import { Membership_SLIDES } from "./Constants";


const MembershipSelection = ({ onSelect }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelect = (plan) => {
    setSelectedPlan(plan);
    onSelect(plan);
  };

  return (
    <div>
      <Typography variant="h6">Choose a Membership Plan</Typography>
      {Membership_SLIDES.map((plan) => (
        <Button
          key={plan.title}
          variant={selectedPlan === plan ? "contained" : "outlined"}
          onClick={() => handleSelect(plan)}
          fullWidth
          style={{ marginTop: "10px" }}
        >
          {plan.title} - ${plan.price}
          {plan.duration}
        </Button>
      ))}
    </div>
  );
};

export default MembershipSelection;
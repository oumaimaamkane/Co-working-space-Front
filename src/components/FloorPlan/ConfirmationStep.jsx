import { Typography, List, ListItem, ListItemText } from "@mui/material";

const ConfirmationStep = ({ selectedPlan, selectedDate }) => {
  return (
    <div>
      <Typography variant="h6">Confirm Your Reservation</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Selected Plan"
            secondary={`${selectedPlan.title} - $${selectedPlan.price}${selectedPlan.duration}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Start Date" secondary={selectedDate} />
        </ListItem>
      </List>
    </div>
  );
};

export default ConfirmationStep;

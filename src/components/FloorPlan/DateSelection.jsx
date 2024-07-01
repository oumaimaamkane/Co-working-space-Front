import { useState } from "react";
import { Typography, TextField } from "@mui/material";

const DateSelection = ({ onSelect }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6">Select Start Date</Typography>
      <TextField
        id="date"
        label="Start Date"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default DateSelection;
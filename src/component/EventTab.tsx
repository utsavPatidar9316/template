import React, { useState } from "react";
import { Box, Tab, Tabs, Button } from "@mui/material";
import TabPanel from "./TabPanel"; // Assume you have a TabPanel component
import { useLocation, useNavigate } from "react-router-dom";
import EventCard from "./EventList";
import SubEvent from "./SubEvent";
import EventExpenses from "./EventExpenses";

const MyTabs: React.FC = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="relative dark:bg-gray-700 text-white h-full">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "ActiveBorder",
          position: "relative",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Event" sx={{ color: "white" }} />
          <Tab label="Sub Event" sx={{ color: "white" }} />
          <Tab label="Event Expense" sx={{ color: "white" }} />
        </Tabs>
        <Button
          variant="contained"
          color="primary"
          style={{ position: "absolute", top: 8, right: 8 }}
          onClick={() => {
            navigate("/events");
          }}
        >
          Cancel
        </Button>
      </Box>
      <TabPanel value={value} index={0}>
        <EventCard state={state.x} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <SubEvent />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <EventExpenses />
      </TabPanel>
    </div>
  );
};

export default MyTabs;

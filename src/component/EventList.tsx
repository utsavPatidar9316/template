import React from "react";
import AddIcon from "@mui/icons-material/Add";
type props = {
  id: string;
  eventName: string;
  eventStartDate: string;
  eventEndDate: string;
  address: string;
  contactGroup: string[];
};
const EventCard: React.FC<{ state: props }> = ({ state }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-md shadow-md text-white">
      <h2 className="text-2xl font-semibold mb-4">
        EventName: {state.eventName}
      </h2>
      <div className="flex items-center mb-4">
        <AddIcon />
        <span className="text-gray-400">
          Start Date: {state.eventStartDate}
        </span>
      </div>
      <div className="flex items-center mb-4">
        <AddIcon />
        <span className="text-gray-400">End Date: {state.eventEndDate}</span>
      </div>
      <div className="flex items-center mb-4">
        <AddIcon />
        <span className="text-gray-400">Address: {state.address}</span>
      </div>
      <div className="flex items-center">
        <AddIcon />
        <span className="text-gray-400">
          Group: {state.contactGroup.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default EventCard;

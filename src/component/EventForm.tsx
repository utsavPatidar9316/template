import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Dispatch, SetStateAction } from "react";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
};
const EventForm: React.FC<Props> = ({ open, setOpen, title }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="flex items-center justify-center"
    >
      <Box
        sx={{
          width: 400,
          bgcolor: "#0f78f9", // Set the background color for dark mode
          p: 4,
          borderRadius: "8px",
          color: "white", // Set the text color for dark mode
        }}
      >
        <h2 id="parent-modal-title" className="text-xl font-bold mb-4">
          {title} Form
        </h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="text-white block mb-1">
            {title} Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full bg-gray-700 text-white px-3 py-2 rounded placeholder-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            placeholder={`Enter ${title} name`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="text-white block mb-1">
            Start Date
          </label>
          <input
            type="date"
            id="lastName"
            className="w-full bg-gray-700 text-white px-3 py-2 rounded placeholder-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Start Date"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="text-white block mb-1">
            End Date
          </label>
          <input
            type="date"
            id="lastName"
            className="w-full bg-gray-700 text-white px-3 py-2 rounded placeholder-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter End Date"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="text-white block mb-1">
            Contact Group
          </label>
          <select
            id="contactNumber"
            className="block w-full px-4 py-2 leading-5 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
          >
            <option>Select Group</option>
            <option>Friends</option>
            <option>Family</option>
          </select>
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            setOpen(false);
          }}
        >
          Submit
        </button>
      </Box>
    </Modal>
  );
};

export default EventForm;

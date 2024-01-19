import React, { useState, ChangeEvent } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Dispatch, SetStateAction } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
interface Profile {
  firstName: string;
  lastName: string;
  contactNo: string;
  email: string;
  dob: string;
  address: string;
  interest: string[];
}

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ProfileModal: React.FC<Props> = ({ open, setOpen }) => {
  const [editedProfile, setEditedProfile] = useState<Profile>({
    firstName: "John",
    lastName: "Doe",
    contactNo: "1234567890",
    email: "john.doe@example.com",
    dob: "1990-01-01",
    address: "123 Main Street, City",
    interest: ["sports", "Dance", "Music"],
  });
  const [interests, setInterests] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Add logic to save changes to the backend or update state
    console.log("Saving changes:", editedProfile);
    setOpen(false);
  };

  const suggestedInterests = [
    "🎨 Art",
    "📚 Books",
    "💼 Business",
    "🚗 Cars",
    "📖 Comics",
    "🌍 Culture",
    "✏️ Design",
    "🍽️ Food",
    "🎮 Gaming",
    "🎶 Music",
    "🏋️ Fitness",
    "🏞️ Travel",
    "🎯 Sports",
    "🎬 Movies",
    "📺 TV Shows",
    "📷 Photography",
    "💻 Technology",
    "🧘‍♀️ Yoga",
    "🌱 Sustainability",
    "📝 Writing",
  ];
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="flex items-center justify-center"
    >
      <div className="modal-content p-6 bg-white rounded-md">
        <TextField
          label="First Name*"
          name="firstName"
          value={editedProfile.firstName}
          onChange={handleInputChange}
          style={{
            width: "calc(50% - 8px)",
            marginTop: "10px",
            marginRight: "4px",
          }}
        />
        <TextField
          label="Last Name*"
          name="lastName"
          value={editedProfile.lastName}
          onChange={handleInputChange}
          style={{
            width: "calc(50% - 8px)",
            marginTop: "10px",
            marginRight: "4px",
          }}
        />
        <TextField
          label="Contact Number*"
          name="contactNo"
          value={editedProfile.contactNo}
          onChange={handleInputChange}
          fullWidth
          style={{
            width: "calc(50% - 8px)",
            marginTop: "10px",
            marginRight: "4px",
          }}
        />
        <TextField
          label="Email"
          name="email"
          value={editedProfile.email}
          onChange={handleInputChange}
          fullWidth
          style={{
            width: "calc(50% - 8px)",
            marginTop: "10px",
            marginRight: "4px",
          }}
        />
        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          value={editedProfile.dob}
          onChange={handleInputChange}
          fullWidth
          style={{ marginTop: "10px", marginRight: "4px" }}
        />
        <TextField
          label="Address"
          name="address"
          multiline
          rows={3}
          value={editedProfile.address}
          onChange={handleInputChange}
          fullWidth
          style={{ marginTop: "10px", marginRight: "4px" }}
        />
        <label>Interests</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-b border-gray-300 p-2 outline-none"
          value={interests}
          onChange={(e) => {
            setInterests(e.target.value);
          }}
          // disabled
        />
        <div className="mt-6 h-20 overflow-y-auto">
          <div className="flex flex-wrap gap-2">
            {suggestedInterests.map((interest, index) => (
              <button
                key={index}
                type="button"
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() =>
                  setInterests(
                    interests === "" ? interest : interests + ", " + interest
                  )
                }
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Button
            onClick={handleSaveChanges}
            variant="contained"
            color="primary"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;

import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { data } from "../constant/EventData";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import Tooltip from "@mui/material/Tooltip";
import EventForm from "./EventForm";
const SubEvent = () => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const dialogeClose = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <h1 className="text-2xl font-bold m-2 flex justify-between">
        <span className="ml-4">Sub Events</span>
        <span
          className="text-right mr-10 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Add <AddRoundedIcon />
        </span>
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SubEvent
              </th>
              <th scope="col" className="px-6 py-3">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3">
                End Date
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Group
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={x.id}
              >
                <td className="px-6 py-4">{x.eventName}</td>
                <td className="px-6 py-4">{x.eventStartDate}</td>
                <td className="px-6 py-4">{x.eventEndDate}</td>
                <td className="px-6 py-4">{x.address}</td>
                <td className="px-6 py-4">{x.contactGroup.join(", ")}</td>
                <td className="px-6 py-4 text-right cursor-pointer">
                  <Tooltip title="Edit" arrow>
                    <span onClick={() => setOpen(true)}>
                      <EditNoteRoundedIcon />
                    </span>
                  </Tooltip>
                  <Tooltip title="View" arrow>
                    <span
                      onClick={() => {
                        setDialogOpen(true);
                        setTitle("Active/InActive");
                        setMessage(
                          "Are You sure you want to inactive the contact?"
                        );
                      }}
                    >
                      <VisibilityIcon />
                    </span>
                  </Tooltip>
                  <Tooltip title="Delete" arrow>
                    <span
                      onClick={() => {
                        setDialogOpen(true);
                        setTitle("Delete User");
                        setMessage(
                          "Are You sure you want to Delete the contact?"
                        );
                      }}
                    >
                      <DeleteIcon />
                    </span>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EventForm open={open} setOpen={setOpen} title={"SubEvent"} />
      <ConfirmationDialog
        open={dialogOpen}
        onClose={dialogeClose}
        title={title}
        message={message}
      />
    </>
  );
};

export default SubEvent;

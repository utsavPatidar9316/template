import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { data } from "../constant/ContactData";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import ContactForm from "./ContactForm";
import ConfirmationDialog from "./ConfirmationDialog";
import Tooltip from "@mui/material/Tooltip";
const Contact = () => {
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
        <span className="ml-4">Contacts</span>
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
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
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
                <td className="px-6 py-4">{x.firstName}</td>
                <td className="px-6 py-4">{x.lastName}</td>
                <td className="px-6 py-4">{x.email}</td>
                <td className="px-6 py-4">{x.phoneNumber}</td>
                <td className="px-6 py-4">
                  {x.phoneNumber.slice(0, 2) === "+9" ? "Family" : "Friend"}
                </td>
                <td className="px-6 py-4 text-right cursor-pointer">
                  <Tooltip title="Edit Note" arrow>
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
      <ContactForm open={open} setOpen={setOpen} />
      <ConfirmationDialog
        open={dialogOpen}
        onClose={dialogeClose}
        title={title}
        message={message}
      />
    </>
  );
};

export default Contact;

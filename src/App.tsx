import "./App.css";
import ForgotPassword from "./component/ForgotPassword";
import ResetPassword from "./component/ResetPassword";
import Sidebar from "./component/Sidebar";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthData } from "./Context/AuthContext";
import PageNotFound from "./component/PageNotFound";
import Dashboard from "./component/Dashboard";
import Contact from "./component/Contact";
import ContactGroup from "./component/ContactGroup";
import Event from "./component/Event";
import MyTabs from "./component/EventTab";

function App() {
  return (
    <BrowserRouter>
      <AuthData>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/" element={<Sidebar />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="contactsgrp" element={<ContactGroup />} />
            <Route path="events" element={<Event />} />
            <Route path="eventtab" element={<MyTabs />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthData>
    </BrowserRouter>
  );
}

export default App;

// Dashboard.js

import DashboardCard from "./DashboardsCards";
import Logo from "../logo.svg";

const events = [
  {
    title: "Event 1",
    date: "January 1, 2024",
    time: "2:00 PM",
    description: "Description for Event 1",
    photo: Logo,
  },
  {
    title: "Event 2",
    date: "February 5, 2024",
    time: "4:30 PM",
    description: "Description for Event 2",
    photo: Logo,
  },
  {
    title: "Event 3",
    date: "March 12, 2024",
    time: "7:00 PM",
    description: "Description for Event 3",
    photo: Logo,
  },
  {
    title: "Event 4",
    date: "April 18, 2024",
    time: "1:00 PM",
    description: "Description for Event 4",
    photo: Logo,
  },
  {
    title: "Event 5",
    date: "May 22, 2024",
    time: "5:45 PM",
    description: "Description for Event 5",
    photo: Logo,
  },
  {
    title: "Event 6",
    date: "June 7, 2024",
    time: "8:30 AM",
    description: "Description for Event 6",
    photo: Logo,
  },
  {
    title: "Event 7",
    date: "July 14, 2024",
    time: "3:15 PM",
    description: "Description for Event 7",
    photo: Logo,
  },
  {
    title: "Event 8",
    date: "August 20, 2024",
    time: "6:45 PM",
    description: "Description for Event 8",
    photo: Logo,
  },
  {
    title: "Event 9",
    date: "September 25, 2024",
    time: "10:00 AM",
    description: "Description for Event 9",
    photo: Logo,
  },
  {
    title: "Event 10",
    date: "October 9, 2024",
    time: "12:30 PM",
    description: "Description for Event 10",
    photo: Logo,
  },
  {
    title: "Event 11",
    date: "November 15, 2024",
    time: "3:45 PM",
    description: "Description for Event 11",
    photo: Logo,
  },
  {
    title: "Event 12",
    date: "December 22, 2024",
    time: "9:15 AM",
    description: "Description for Event 12",
    photo: Logo,
  },
];

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold m-2">Dashboard</h1>
      <div className={`grid md:grid-cols-4 m-4 gap-2 sm:grid-cols-12 dark`}>
        {events.map((event, index) => (
          <DashboardCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

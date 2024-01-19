// DashboardCard.js

import React from "react";

type Props = {
  event: {
    title: string;
    time: string;
    description: string;
    photo: string;
  };
};

const DashboardCard: React.FC<Props> = ({ event }) => {
  return (
    <div className={`bg-gray-900 text-white p-4 rounded-lg shadow-md`}>
      <img
        src={event.photo}
        alt={event.title}
        className="w-16 h-16 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-bold mb-2">{event.title}</h2>
      <p className="text-sm text-gray-300 mb-4">{event.time}</p>
      <p className="text-gray-300">{event.description}</p>
    </div>
  );
};

export default DashboardCard;

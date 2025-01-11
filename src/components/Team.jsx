import React from "react";
import { teamMembers } from "../utils/constant";

const Team = () => {
  return (
    <div className="p-6">
      <div className="bg-white w-[60vw] max-md:w-full p-8 rounded-lg shadow-sm">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-800">Team</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
            nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
            quam. Facilisis purus convallis quam augue.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-1  ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#E8F4FD] shadow-md rounded-md p-6 flex space-x-4 max-md:flex-wrap"
            >
              <div className="w-[40%] max-md:mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-24 rounded-md mx-auto object-cover"
                />
                <div className="mt-2 max-md:text-center">
                  <h3 className="font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.designation}</p>
                </div>
              </div>
              <div className=" p-4 rounded-md">
                <p className="text-sm text-gray-600 mt-2">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

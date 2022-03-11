import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const sidebar = () => {
  return (
    <>
      <div className="scale-77">
        <div className="">
        <aside className="w-64" aria-label="Sidebar">
          <div className="overflow-y-auto h-screen px-3   bg-[#1955CA]">
            <ul className="space-y-2">
              
              <li className="mt-9">
                <a className="flex items-center p-2 text-base font-normal  rounded-lg text-white ">
                  <div className="relative w-24 h-24">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm"
                      src="https://randomuser.me/api/portraits/men/79.jpg"
                      alt="user image"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a className="flex items-center   font-normal text-2xl rounded-lg text-white ">
                  <span className="ml-3 mb-5">John Doe</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#0c3992]">
                  <DashboardIcon />
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#0c3992]">
                  <MessageIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Challenge
                  </span>
                  
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#0c3992]">
                  <AssignmentIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Resouces
                  </span>
                  
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#0c3992]">
                  <PeopleIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap">Blog</span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#0c3992]">
                  <PeopleIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Big Projects
                  </span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#0c3992]">
                  <MessageIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Open Source
                  </span>
                </a>
              </li>
              <li>
                <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-[#0c3992]">
                  <SettingsIcon />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    All Admins
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      </div>
    </>
  );
};

export default sidebar;

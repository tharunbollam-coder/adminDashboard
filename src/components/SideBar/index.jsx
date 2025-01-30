import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  Box,
  Heart,
  MenuIcon,
  XIcon,
  ListCheck,
  Inbox,
  Rows3,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleActiveTab = (event) => {
    const tabName = event.currentTarget.getAttribute("data-name");
    setActiveTab(tabName);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-600 text-white transition-all duration-300 flex flex-col h-full`}
      >
        {/* Toggle Button */}
        <button
          className="p-4 focus:outline-none text-gray-300 hover:text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col gap-4">
          {[
            { name: "Dashboard", icon: <HomeIcon size={20} />, path: "/" },
            { name: "Products", icon: <Box size={20} />, path: "/products" },
            { name: "Favourites", icon: <Heart size={20} />, path: "/favourites" },
            { name: "Inbox", icon: <Inbox size={20} />, path: "/inbox" },
            { name: "Order Lists", icon: <ListCheck size={20} />, path: "/orderlists" },
            { name: "Product Stock", icon: <Rows3 size={20} />, path: "/productstock" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              data-name={item.name}
              className={`flex items-center gap-4 p-4 hover:scale-110 transition ${
                activeTab === item.name ? "bg-cyan-500" : ""
              }`}
              onClick={handleActiveTab}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          ))}



          {/* Logout Button */}
          <button
            className="flex items-center gap-4 p-4 hover:scale-110 transition text-red-400 hover:text-red-500"
            onClick={() => alert("Logging out...")}
          >
            {isOpen && <span>Logout</span>}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

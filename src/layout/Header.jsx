import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { navItems } from "../data/navItems";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleSidebarToggle = () => setSidebarOpen(prev => !prev);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 px-8">
          <a className="btn btn-ghost text-xl">Dunamis</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2 px-20">
          <ul className="flex justify-center items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                {item.submenu ? (
                  <div
                    className="dropdown dropdown-hover"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <NavLink
                      to={item.path}
                      end
                      tabIndex={0}
                      className={({ isActive }) => `btn ${isActive ? 'btn-secondary' : 'btn-ghost'}`}
                    >
                      {item.name}
                    </NavLink>
                    <ul
                      className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 transition-all duration-300 ease-in-out transform ${
                        hoveredItem === item.id ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.id}>
                          <NavLink
                            to={`${item.path}?section=${subItem.id}`}
                            className={({ isActive }) => isActive ? 'active' : ''}
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    end
                    className={({ isActive }) => `btn ${isActive ? 'btn-secondary' : 'btn-ghost'}`}
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}

            {/* Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                <li><a className="justify-between">Profile <span className="badge">New</span></a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={handleSidebarToggle} className="btn btn-ghost text-xl">&#9776;</button>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} navItems={navItems} />
    </>
  );
};

export default Header;
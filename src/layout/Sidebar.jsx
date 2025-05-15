import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose, navItems }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleSubmenu = (itemId) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-base-100 shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold">Dunamis</h2>
        <button 
          onClick={onClose} 
          className="btn btn-ghost btn-circle"
        >
          &times;
        </button>
      </div>

      <ul className="menu p-4">
        {navItems.map((item) => (
          <li key={item.id}>
            {item.submenu ? (
              <details
                open={expandedItems.includes(item.id)}
                onToggle={() => toggleSubmenu(item.id)}
              >
                <summary>
                  <NavLink
                    to={item.path}
                    end
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                    onClick={(e) => {
                      // Prevent default to allow the details toggle to work
                      if (!expandedItems.includes(item.id)) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.name}
                  </NavLink>
                </summary>
                <ul className="ml-4">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.id}>
                      <NavLink
                        to={`${item.path}?section=${subItem.id}`}
                        onClick={onClose}
                        className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                      >
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {item.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
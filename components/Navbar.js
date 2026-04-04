"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="navbar-custom">
      <div className="topbar container-fluid d-flex justify-content-between align-items-center">

        {/* LEFT SIDE */}
        <div className="d-flex align-items-center gap-2">

          {/* Logo */}
          {/* <Link href="/" className="logo-light">
            <img
              src="/admin_assets/images/logo.png"
              height="50"
              alt="logo"
            />
          </Link> */}

          {/* Toggle Button */}
          <button className="button-toggle-menu">
            <i className="ri-menu-2-fill"></i>
          </button>

          {/* Search */}
          <div className="d-none d-lg-block">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              style={{ width: "200px" }}
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <ul className="topbar-menu d-flex align-items-center gap-3 list-unstyled m-0">

          {/* Language */}
          <li className="position-relative">
            <button
              className="btn"
              onClick={() => toggleDropdown("lang")}
            >
              🌐 English
            </button>

            {openDropdown === "lang" && (
              <div className="dropdown-menu show">
                <button className="dropdown-item">German</button>
                <button className="dropdown-item">Italian</button>
                <button className="dropdown-item">Spanish</button>
              </div>
            )}
          </li>

          {/* Notifications */}
          <li className="position-relative">
            <button
              className="btn"
              onClick={() => toggleDropdown("notify")}
            >
              🔔
            </button>

            {openDropdown === "notify" && (
              <div className="dropdown-menu show p-2" style={{ width: "300px" }}>
                <h6>Notifications</h6>
                <div className="dropdown-item">
                  New user registered
                </div>
                <div className="dropdown-item">
                  New comment received
                </div>
              </div>
            )}
          </li>

          {/* Apps */}
          <li className="position-relative">
            <button
              className="btn"
              onClick={() => toggleDropdown("apps")}
            >
              📦
            </button>

            {openDropdown === "apps" && (
              <div className="dropdown-menu show p-2">
                <div>GitHub</div>
                <div>Dropbox</div>
                <div>Slack</div>
              </div>
            )}
          </li>

          {/* User */}
          <li className="position-relative">
            <button
              className="btn d-flex align-items-center"
              onClick={() => toggleDropdown("user")}
            >
              <img
                src="/admin_assets/images/users/avatar-1.jpg"
                width="32"
                className="rounded-circle"
              />
              <span className="ms-2 d-none d-lg-block">Admin</span>
            </button>

            {openDropdown === "user" && (
              <div className="dropdown-menu show">
                <Link href="/profile" className="dropdown-item">My Account</Link>
                <Link href="/settings" className="dropdown-item">Settings</Link>
                <Link href="/logout" className="dropdown-item">Logout</Link>
              </div>
            )}
          </li>

        </ul>
      </div>
    </div>
  );
}
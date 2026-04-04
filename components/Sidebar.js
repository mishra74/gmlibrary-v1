"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="leftside-menu">

      {/* Logo */}
      <Link href="/" className="logo logo-light">
        <span className="logo-lg">
          <img
            src="/assets/img/logo.png"
            width="100"
            height="40"
            style={{ marginLeft: "65px", marginTop: "10px" }}
          />
        </span>
      </Link>

      {/* User */}
      <div className="leftbar-user text-center mt-3">
        <img
          src="/assets/images/users/avatar-1.jpg"
          height="42"
          className="rounded-circle shadow-sm"
        />
        <div className="mt-2">Admin User</div>
      </div>

      {/* Menu */}
      <ul className="side-nav">

        <li className="side-nav-title"><img
             src="('/assets/img/logo.png'}}"
              height="10"
              alt="logo"
            /></li>

        {/* Dashboard */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("dashboard")} className="side-nav-link">
            🏠 Dashboards
          </button>
        </li>

        {/* Zones */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("zones")} className="side-nav-link">
            🏢 Zones
          </button>

          {openMenu === "zones" && (
            <ul className="side-nav-second-level">
              <li><Link href="/admin/zone">🏢 Zones</Link></li>
              <li><Link href="/admin/center">🧾 Centers</Link></li>
            </ul>
          )}
        </li>

        {/* Vendors */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("vendors")} className="side-nav-link">
            👥 Vendors
          </button>

          {openMenu === "vendors" && (
            <ul className="side-nav-second-level">
              <li><Link href="/admin/vendors">🏬 Vendors</Link></li>
            </ul>
          )}
        </li>

        {/* Students */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("students")} className="side-nav-link">
            👥 Students
          </button>

          {openMenu === "students" && (
            <ul className="side-nav-second-level">
              <li><Link href="/admin/students">👥 All Students</Link></li>
            </ul>
          )}
        </li>

        {/* Bookings */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("bookings")} className="side-nav-link">
            🎟️ Bookings
          </button>

          {openMenu === "bookings" && (
            <ul className="side-nav-second-level">
              <li><Link href="/admin/bookings">🎟️ All Bookings</Link></li>
            </ul>
          )}
        </li>

        {/* Coupons */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("coupons")} className="side-nav-link">
            🎟 Coupons
          </button>

          {openMenu === "coupons" && (
            <ul className="side-nav-second-level">
              <li><Link href="/admin/coupons">🎟️ Coupons</Link></li>
            </ul>
          )}
        </li>

        {/* E-Notes */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("notes")} className="side-nav-link">
            📒 E-Notes
          </button>

          {openMenu === "notes" && (
            <ul className="side-nav-second-level">
              <li><Link href="/admin/enotes">📒 Notes</Link></li>
            </ul>
          )}
        </li>

        {/* Notices */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("notices")} className="side-nav-link">
            📢 Notices
          </button>

          {openMenu === "notices" && (
            <ul className="side-nav-second-level">
              <li><Link href="/admin/notices">📢 Notices</Link></li>
            </ul>
          )}
        </li>

        {/* Sliders */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("sliders")} className="side-nav-link">
            🖼️ Sliders
          </button>

          {openMenu === "sliders" && (
            <ul className="side-nav-second-level">
              <li><Link href="/admin/sliders">🖼️ Sliders</Link></li>
            </ul>
          )}
        </li>

        {/* Ads */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("ads")} className="side-nav-link">
            📣 Ads
          </button>

          {openMenu === "ads" && (
            <ul className="side-nav-second-level">
              <li><Link href="/admin/ads">📣 Ads</Link></li>
            </ul>
          )}
        </li>

        {/* Settings */}
        <li className="side-nav-item">
          <button onClick={() => toggleMenu("settings")} className="side-nav-link">
            ⚙️ Settings
          </button>

          {openMenu === "settings" && (
            <ul className="side-nav-second-level">
              <li><Link href="/admin/profile">👤 Admin Profile</Link></li>
            </ul>
          )}
        </li>

        {/* Logout */}
        <li className="side-nav-item">
          <Link href="/logout" className="side-nav-link">
            🚪 Logout
          </Link>
        </li>

      </ul>
    </div>
  );
}
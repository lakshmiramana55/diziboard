import React from "react";
import { Link } from "react-router-dom";
import "./DashboardNav.css";

const DashboardNav = () => {
  return (
    <div className="dashboard-nav-bg-container">
      <nav className="dashboard-nav-container">
        <div >
        <Link
              className="list-names"
              to="/dashboard"
            >
          <img
            className="db-nav-logo"
            src="http://192.168.0.116:8080/css/images/logo.png"
          />
          </Link>
        </div>
        <ul className="db-nav-ul-list-container">
          <li>
            <Link
              className="list-names "
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="list-names"
              to="/dashboard/kidsstatus"
            >
              Kid Status
            </Link>
          </li>
          <li>
            <Link
              className="list-names"
              to="/dashboard/eventmanagement"
            >
              Event Management
            </Link>
          </li>
          <li>
            <Link
              className="list-names"
              to="/dashboard/holidaymanagement"
            >
              Holiday Management
            </Link>
          </li>
          <li>
            <Link
              className="list-names"
              to="/dashboard/kidmarks"
            >
              Kid Marks
            </Link>
          </li>
          <li>
            <Link
              className="list-names"
              to="/dashboard/attendance"
            >
              Attendance
            </Link>
          </li>
          <li>
            <Link
              className="list-names"
              to="/dashboard/diary"
            >
              Diary
            </Link>
          </li>
          <li>
            <Link
              className="list-names"
              to="/dashboard/kidapprovals"
            >
              Kid Approvals
            </Link>
          </li>
          <li>
            <Link
              className="list-names"
              to="/dashboard/aboutme"
            >
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNav;
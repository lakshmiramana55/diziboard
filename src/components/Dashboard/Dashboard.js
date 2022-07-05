// import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutMe from "./AboutMe/AboutMe";
// import Attendence from "./Attendence/Attendence";
// import DashboardFooter from "./DashboardFooter/DashboardFooter";
// import DashboardHome from "./DashboardHome/DashboardHome";
// import DashboardNav from "./DashboardNav/DashboardNav";
// import Diary from "./Diary/Diary";
// import EventManagement from "./EventManagement/EventManagement";

// import KidApprovals from "./KidApprovals/KidApprovals";
// import KidMarks from "./KidMarks/KidMarks";
// // import KidsStatus from "./KidsStatus/kidsStatus";
// import "./Dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-bg-container">
//       <DashboardNav />
//       <Routes>
//         <Route path="/" element={<DashboardHome />} />
//         {/*path ="/" to render the component on the same path "/dashboard" 
//         this DashboardHome component will render on same path "/dashboard"*/}
//         {/* <Route path="/kidstatus" element={<KidsStatus />} /> */}
//         <Route path="/eventmanagement" element={<EventManagement />} />
//         {/* <Route
//           path="/dashboard/holidaymanagement"
//           element={<HolidayManagement />}
//         /> */}
//         <Route path="/kidmarks" element={<KidMarks />} />
//         <Route path="/attendence" element={<Attendence />} />
//         <Route path="/diary" element={<Diary />} />
//         <Route path="/kidapprovals" element={<KidApprovals />} />
//         <Route path="/aboutme" element={<AboutMe />} />
        
//       </Routes>
//       <DashboardFooter />
//     </div>
//   );
// };

// export default Dashboard;





import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import Attendence from "./Attendence/Attendence";
import DashboardFooter from "./DashboardFooter/DashboardFooter";
import DashboardHome from "./DashboardHome/DashboardHome";
import DashboardNav from "./DashboardNav/DashboardNav";
import Diary from "./Diary/Diary";
import EventManagement from "./EventManagement/EventManagement";
import HolidayManagement from "./HolidayManagement/HolidayManagement";
import KidApprovals from "./KidApprovals/KidApprovals";
import KidMarks from "./KidMarks/KidMarks";
import KidsStatus from "./KidsStatus/KidsStatus";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-bg-container">
      <DashboardNav />
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        {/*path ="/" to render the component on the same path "/dashboard" 
        this DashboardHome component will render on same path "/dashboard"*/}
        <Route path="/kidsstatus" element={<KidsStatus />} />
        <Route path="/eventmanagement" element={<EventManagement />} />
        <Route
          path="/dashboard/holidaymanagement"
          element={<HolidayManagement />}
        />
        <Route path="/kidmarks" element={<KidMarks />} />
        <Route path="/attendance" element={<Attendence />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/kidapprovals" element={<KidApprovals />} />
        <Route path="/aboutme" element={<AboutMe />} />
        {/* 1. for nested routing,=> routing inside routing, 
              use /dashboard/* for path inside Browser router to support further routing
              to render descendant routes you need to use /* for parent Route
              
              for nested or descendANT ROUTES YOU NO NEED to use <brouserRouter>
              just use <Routes> and <Route/> components but parent of this must be in main <BrowserRouter/>
              
              2. for nested <Route path=/kidstatus
            3. for link <Link to=/dashboard/kidstatus
                 
                 */}
      </Routes>
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;
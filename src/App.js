// //import logo from './logo.svg';
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home/Home";
// import LoginForm from './components/LoginForm/loginForm';
// import AboutUs from "./components/AboutUs/AboutUs";
// import Features from "./components/Features/features";
// import Download from "./components/Download/download";
// import Screens from "./components/Screens/screens";
// import Contact from "./components/Contact/contact";
// import KidStatus from './components/KidStatus/kidStatus'



// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/features" element={<Features />} />
//           <Route path="/screens" element={<Screens />} />
//           <Route path="/download" element={<Download />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path = "/kidStatus" element = {<KidStatus/>}/>
          

        
//         </Routes>
//       </BrowserRouter>

//     </div>
//   );
// }

// export default App;



//import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/loginForm";
import AboutUs from "./components/AboutUs/AboutUs";
import Features from "./components/Features/features";
import Download from "./components/Download/download";
import Screens from "./components/Screens/screens";
import Contact from "./components/Contact/contact";
// import Registration from "./components/Registration/Registration";
import Dashboard from "./components/Dashboard/Dashboard";

// import AboutMe from "./Components/Dashboard/AboutMe/AboutMe";
// import Attendance from "./Components/Dashboard/Attendance/Attendance";
// import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
// import Diary from "./Components/Dashboard/Diary/Diary";
// import EventManagement from "./Components/Dashboard/EventManagement/EventManagement";
// import HolidayManagement from "./Components/Dashboard/HolidayManagement/HolidayManagement";
// import KidApprovals from "./Components/Dashboard/KidApprovals/KidApprovals";
// import KidMarks from "./Components/Dashboard/KidMarks/KidMarks";
// import KidStatus from "./Components/Dashboard/KidStatus/KidStatus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/features" element={<Features />} />
          <Route path="/screens" element={<Screens />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/registration" element={<Registration />} /> */}
          <Route path="/Dashboard/*" element={<Dashboard />} />

          {/* Here you need to give /* if you want to use descendant/nested routing */}

          {/* <Route path="/dashboardhome" element={<DashboardHome />} /> */}

          {/* after login */}
          {/* <Route path="/dashboardhome" element={<DashboardHome />} />
          <Route path="/kidstatus" element={<KidStatus />} />
          <Route path="/eventmanagement" element={<EventManagement />} />
          <Route path="/holidaymanagement" element={<HolidayManagement />} />
          <Route path="/kidmarks" element={<KidMarks />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/kidapprovals" element={<KidApprovals />} />
          <Route path="/aboutme" element={<AboutMe />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <header class="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          class="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
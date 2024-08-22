import React from "react";
import { Route, Routes } from "react-router-dom";
import NewOppcomp from "../Manage/Opportunities/NewOpportunity/NewoppComp";
import AppliedComp from "../Manage/Opportunities/AppliedComp/AppliedComp";
import CompltedComp from "../Manage/Opportunities/CompletedComp/CompletedComp";
import OngoingComp from "../Manage/Opportunities/OngoingComp/OngoingComp";


const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Dashboard
            </div>
          }
        />

<Route
          path="/Dashboard"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Dashboard
            </div>
          }
        />
    

        <Route
          path="/Earnings"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Earnings
            </div>
          }
        />
        <Route
          path="/Analytics"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Analytics
            </div>
          }
        />


        <Route
          path="/Profile"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Profile
            </div>
          }
        />


<Route
          path="/Contracts"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Contracts
            </div>
          }
        />

        <Route
          path="/Opportunities"
          element={<NewOppcomp/>}
        />

         <Route
          path="/Applied"
          element={<AppliedComp/>}
        />

         <Route
          path="/Ongoing"
          element={<OngoingComp/>}
        />
         <Route
          path="/Complete"
          element={<CompltedComp/>}
        />




        <Route
          path="/settings"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Settings
            </div>
          }
        />
        <Route
          path="/Support"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
             Help & Support
            </div>
          }
        />

           </Routes>
    </>
  );
};

export default MainRouter;

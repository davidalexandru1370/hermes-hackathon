import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../src/pages/LoginPage/LoginPage";
import EmployesList from "./Components/EmployesList";

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <EmployesList></EmployesList>
          </>
        }
      ></Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;

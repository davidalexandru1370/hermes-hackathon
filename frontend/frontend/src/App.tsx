import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
//import LoadingButton from "@mui/material/lab/LoadingButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import BoxedLayout from "./core/components/BoxedLayout";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../src/pages/LoginPage/LoginPage";
import { DashboardPage } from "../src/pages/DashboardPage/DashboardPage";

function App() {
  
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element = {<DashboardPage/>} />

    </Routes>
  );
}

export default App;

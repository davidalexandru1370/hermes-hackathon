import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
//import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import BoxedLayout from "./core/components/BoxedLayout";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { User } from "./Model/User";

function App() {
  const login = async () => {
    let user: User = {
      email: email,
      password: password,
    };
    await fetch("https://localhost:7203/api/user/login", {
      body: JSON.stringify(user),
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(async (response) => {
        if ((await response).status >= 400) {
          throw Error();
        }
        return await response.json();
      })
      .then((token) => {
        setErrors("");
        localStorage.setItem("token", token);
        navigate("/dashboard");
      })
      .catch((error) => {
        setErrors("Email or password does not exists!");
      });
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string>("");

  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />}></Route>
      <Route
        path="/"
        element={
          <Grid container component="main" sx={{ height: "100vh" }}>
            {
              <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                  backgroundImage: "url(./img/login.webp)",
                  backgroundRepeat: "no-repeat",
                  bgcolor: "background.default",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            }
            <Grid item xs={12} sm={8} md={5} component={Paper} square>
              <BoxedLayout>
                <Typography component="h1" variant="h5">
                  {"Sign in"}
                </Typography>
                <Box component="form" marginTop={3} noValidate>
                  <TextField
                    margin="normal"
                    variant="filled"
                    required
                    fullWidth
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    label={"Email"}
                    name="email"
                    autoComplete="repeat-password"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    variant="filled"
                    required
                    fullWidth
                    name="password"
                    label={"Password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    id="password"
                    autoComplete="repeat-password"
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={async () => {
                      await login();
                    }}
                  >
                    {"Sign in"}
                  </Button>
                  <p style={{ color: "red" }}>{errors}</p>
                </Box>
              </BoxedLayout>
            </Grid>
          </Grid>
        }
      ></Route>
    </Routes>
  );
}

export default App;

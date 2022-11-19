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

function App() {
  
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(./img/startup.svg)",
          backgroundRepeat: "no-repeat",
          bgcolor: "background.default",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <BoxedLayout>
          <Typography component="h1" variant="h5">
            {("Sign in")}
          </Typography>
          <Box
            component="form"
            marginTop={3}
            noValidate
            // onSubmit={formik.handleSubmit}
          >
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="email"
              label={("Email")}
              name="email"
              autoComplete="email"
              autoFocus
              // disabled={isLoggingIn}
              // value={formik.values.email}
              // onChange={formik.handleChange}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="password"
              label={("Password")}
              type="password"
              id="password"
              autoComplete="current-password"
              // disabled={isLoggingIn}
              // value={formik.values.password}
              // onChange={formik.handleChange}
              // error={formik.touched.password && Boolean(formik.errors.password)}
              // helperText={formik.touched.password && formik.errors.password}
            />
            <Box sx={{ textAlign: "right" }}>
              <Link
                component={RouterLink}
                to={`/${process.env.PUBLIC_URL}/forgot-password`}
                variant="body2"
              >
                {("I forgot my password")}
              </Link>
            </Box>
            <Button
              type="submit"
              fullWidth
              // loading={isLoggingIn}
              variant="contained"
              sx={{ mt: 3 }}
            >
              {("Sign in")}
            </Button>
            <Button style ={{backgroundColor: "lightblue"}}
              component={RouterLink}
              to={`/${process.env.PUBLIC_URL}/register`}
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              {("Register")}
            </Button>
          </Box>
        </BoxedLayout>
      </Grid>
    </Grid> } ></Route>
      </Routes>
  );
}

export default App;

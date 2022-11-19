import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
//import LoadingButton from "@material-ui/lab/LoadingButton";
//import { useFormik } from "formik";
//import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
//import * as Yup from "yup";
import BoxedLayout from "../../core/components/BoxedLayout";
//import { useSnackbar } from "../../core/contexts/SnackbarProvider";
//import { useRegister } from "../hooks/useRegister";
//import { UserInfo } from "../types/userInfo";

const genders = [
  { label: "Female", value: "F" },
  { label: "Male", value: "M" },
  { label: "None", value: "NC" },
];

const Register = () => {
  //const navigate = useNavigate();
  //const snackbar = useSnackbar();
  //const { t } = useTranslation();

  //const { isRegistering, register } = useRegister();

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     firstName: "",
  //     gender: "F",
  //     lastName: "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string()
  //       .email("Invalid email address")
  //       .required(t("common.validations.required")),
  //     firstName: Yup.string()
  //       .max(20, t("common.validations.max", { size: 20 }))
  //       .required(t("common.validations.required")),
  //     lastName: Yup.string()
  //       .max(30, t("common.validations.max", { size: 30 }))
  //       .required(t("common.validations.required")),
  //   }),
  //   onSubmit: (values) => handleRegister(values),
  // });

  // const handleRegister = async (values: Partial<UserInfo>) => {
  //   register(values as UserInfo)
  //     .then(() => {
  //       snackbar.success(t("auth.register.notifications.success"));
  //       navigate(`/${process.env.PUBLIC_URL}/login`);
  //     })
  //     .catch(() => {
  //       snackbar.error(t("common.errors.unexpected.subTitle"));
  //     });
  // };

  return (
    <BoxedLayout>
      <Typography component="h1" variant="h5">
        {"Register"}
      </Typography>
      <Box
        component="form"
        marginTop={3}
        noValidate
        //onSubmit={formik.handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label={"Last Name"}
          name="lastName"
          autoComplete="family-name"
          autoFocus
          //disabled={isRegistering}
          // value={formik.values.lastName}
          // onChange={formik.handleChange}
          // error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          // helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label={"First Name"}
          name="firstName"
          autoComplete="given-name"
          //disabled={isRegistering}
          // value={formik.values.firstName}
          // onChange={formik.handleChange}
          // error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          // helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">
            {"Gender"}
          </FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            // value={formik.values.gender}
            // onChange={formik.handleChange}
          >
            {genders.map((gender) => (
              <FormControlLabel
                control={<Radio />}
                key={gender.value}
                //disabled={isRegistering}
                label={gender.label}
                value={gender.value}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label={"Email"}
          name="email"
          autoComplete="email"
          //disabled={isRegistering}
          // value={formik.values.email}
          // onChange={formik.handleChange}
          // error={formik.touched.email && Boolean(formik.errors.email)}
          // helperText={formik.touched.email && formik.errors.email}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          // disabled={isRegistering}
          // loading={isRegistering}
          sx={{ mt: 2 }}
        > 
          {"Sumbit"}
        </Button>
        <Button
          component={Link}
          to={`/`}
          //to={`/${process.env.PUBLIC_URL}/login`}
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {"Back to login"}
        </Button>
      </Box>
    </BoxedLayout>
  );
};

export default Register;
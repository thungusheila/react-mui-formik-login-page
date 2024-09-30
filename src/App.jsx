// import { Form, Formik } from "formik";
// import { Grid, Button } from "@mui/material";
// import * as Yup from "yup";
// import FormikControl from "./Control/FormikControl";
// const App = () => {
//   const validationSchema = Yup.object({
//     FullName: Yup.string("Enter your Name").required("name is required"),
//   });

//   return (
//     <Formik
//       initialValues={{
//         FullName: "",
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => console.log(values)}
//     >
//       <Form style={{ marginTop: "1rem", width: "100%" }}>
//         <Grid container direction="column">
//           <FormikControl
//             control="input"
//             label="Name"
//             id="name"
//             name="FullName"
//             placeholder="Enter your FullName"
//           />
//         </Grid>
//         <Button type="submit">Submit</Button>
//       </Form>
//     </Formik>
//   );
// };
// export default App;
import React from "react";
import { Form, Formik } from "formik";
import { Grid, Button, Typography } from "@mui/material";
import * as Yup from "yup";
import FormikControl from "./Control/FormikControl"; // Ensure this component handles different input types
// import "./app.css"; // Import the CSS file

const App = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <Typography variant="h4" className="form-title">
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log("Form data", values)}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={2}>
                {/* Email Field */}
                <Grid item>
                  <FormikControl
                    control="input"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </Grid>

                {/* Password Field */}
                <Grid item>
                  <FormikControl
                    control="input"
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    className="submit-button"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { signup } from "../../validation/validation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const Forms = () => {
  const auth = getAuth();
  const [passwordShow, setPasswordShow] = useState("password");
  const [confirmPasswordShow, setConfirmPasswordShow] = useState("password");
  const [loading, setLoading] = useState(false);
  const db = getDatabase();
  const navigate = useNavigate();
  let initialValues = {
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signup,
    onSubmit: () => {
      createUsers();
    },
  });
  const handlePassShow = () => {
    if (passwordShow === "password") {
      setPasswordShow("text");
    } else {
      setPasswordShow("password");
    }
  };
  const handleConPassShow = () => {
    if (confirmPasswordShow === "password") {
      setConfirmPasswordShow("text");
    } else {
      setConfirmPasswordShow("password");
    }
  };
  const createUsers = () => {
    setLoading(true);
    createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(({user}) => {
        updateProfile(auth.currentUser, {
          displayName: formik.values.fullname, 
        }).then(()=>{
          setLoading(true);
          sendEmailVerification(auth.currentUser).then(() => {
            set(ref(db, 'users/' + user.uid), {
              username: user.displayName,
              email: user.email,
            }).then(()=>{
              toast.success("Email has sent", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setTimeout(() => {
                navigate("/login");
              }, 5600);
              setLoading(false);
            });
        });
        
        

        })
        
      })
      .catch((error) => {
        if (error.message.includes("auth/email-already-in-use")) {
          toast.error("email already in use", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        setLoading(false);
      });
  };
  return (
    <>
      <div>
        <ToastContainer />
        <h1>Get started with easily register</h1>
        <h3>Free register and you can enjoy it</h3>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="email"
            type="email"
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email}</p>
          )}
          <TextField
            name="fullname"
            type="text"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fullname}
          />
          {formik.errors.fullname && formik.touched.fullname && (
            <p className="error">{formik.errors.fullname}</p>
          )}
          <div className="password_feild">
            <TextField
              name="password"
              type={passwordShow}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="eye_off" onClick={handlePassShow}>
              {passwordShow === "password" ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          {formik.errors.password && formik.touched.password && (
            <p className="error">{formik.errors.password}</p>
          )}
          <div className="confirm_password_feild">
            <TextField
              name="confirmPassword"
              type={confirmPasswordShow}
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <div className="confirm_eye_off" onClick={handleConPassShow}>
              {confirmPasswordShow === "password" ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className="error">{formik.errors.confirmPassword}</p>
          )}
          <div className="regi_btn">
            {loading ? (
              <Button type="submit" disabled variant="contained" fullWidth>
                <PulseLoader color="#fff" size={10} />
              </Button>
            ) : (
              <Button type="submit" variant="contained" fullWidth>
                Sign up
              </Button>
            )}
          </div>
          <p className="auth">
            Already have an account ? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Forms;

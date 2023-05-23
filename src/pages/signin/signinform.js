import { FiEyeOff, FiEye } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { useState } from "react";
import { signIn } from "../../validation/validation";
import { PulseLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import Google from "../../svg/google";
import Facebook from "../../svg/facebook";
import GitHub from "../../svg/git";
import { useDispatch } from "react-redux";
import { Loginusers } from "../../Features/Slice/userSlice";
const SigninForm = () => {
  const [passwordShow, setPasswordShow] = useState("password");
  const Gitprovider = new GithubAuthProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  let initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signIn,
    onSubmit: () => {
      Signinuser();
    },
  });

  const Signinuser = () => {
    setLoading(true);
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(({ user }) => {
        if (user.emailVerified === true) {
          dispatch(Loginusers(user));
          localStorage.setItem("users", JSON.stringify(user));
          navigate("/");
          setLoading(false);
        } else {
          toast.error("Please Verify Your Email", {
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
      })
      .catch((error) => {
        if (error.message.includes("auth/wrong-password")) {
          toast.error("Wrong Password", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (error.message.includes("auth/user-not-found")) {
          toast.error("User Not Found", {
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
      });
  };
  const handlePassShow = () => {
    if (passwordShow == "password") {
      setPasswordShow("text");
    } else {
      setPasswordShow("password");
    }
  };
  const handleGit = () => {
    signInWithPopup(auth, Gitprovider).then(() => {
      navigate("/");
    });
  };
  const handleGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/");
    });
  };
  const handleFacebook = () => {
    const FacebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, FacebookProvider).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <div>
        <h1>Login To Start Journey With Us</h1>
        <ToastContainer />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="email"
            type="email"
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email}</p>
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
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="eye_off" onClick={handlePassShow}>
              {passwordShow == "password" ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          {formik.errors.password && formik.touched.password && (
            <p className="error">{formik.errors.password}</p>
          )}
          <div className="forgot_pass">
            <span>Forgot Password</span>
          </div>
          <div className="google" onClick={handleGoogle}>
            <Google />
            <span>Sign in with Google</span>
          </div>
          <div className="facebook" onClick={handleFacebook}>
            <Facebook />
            <span>Sign in with Facebook</span>
          </div>
          <div className="github" onClick={handleGit}>
            <GitHub />
            <span>Sign in with Github</span>
          </div>

          <div className="log_btn">
            {loading ? (
              <Button type="submit" disabled variant="contained" fullWidth>
                <PulseLoader color="#fff" size={10} />
              </Button>
            ) : (
              <Button type="submit" variant="contained" fullWidth>
                Log In
              </Button>
            )}
          </div>
          <p className="auth">
            Dont have an account ? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SigninForm;

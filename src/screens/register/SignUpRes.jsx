import React,{ useState } from "react";
import "./SignUp.css";
// import { localUrl } from "../../API/api";
import { Link } from "react-router-dom";
// import vectorLogo from "../../images/Vector-Logo.png";

const SignUpRes = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [confirm_err, setConfirmErr] = useState(null);
  // const [passwordErr, setPasswordErr] = useState(null);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(null);
  const [pincode, setPincode] = useState("");

  const handleConfirm = (value) => {
    setCPassword(value);
    if (!(value === password)) {
      setConfirmErr("Password should match");
    } else {
      setConfirmErr(null);
      return true;
    }
    return false;
  };

  return (
    
      <div className="signup__content">
        <div className="signup__page">
          <form
            method="post"
            onSubmit="return myFormValidation()"
            className="signup__inputFields"
            action=""
          >
            <h1 className="signup__title"><i>Welcome!</i></h1>
            {/* <p style={{ color: "red" }}>{fieldErr}</p> */}
            <label htmlFor="name" className="signup__label">
              Enter the Name of your Restaurant:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter restaurant's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
            <label htmlFor="email" className="signup__label">
            Restaurant Email:
            </label>
            {/* <p style={{ color: "red" }}>{errorsMade}</p> */}
            {/* <p style={{ color: "red" }}>{mailErr}</p> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="signup__label">
            Restaurant Phone:
            </label>
            {/* <p style={{ color: "red" }}>{passwordErr}</p> */}
            <input
              placeholder="Phone number:"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              required
            />
            <label  className="signup__label lastFeild">
              Restaurant's Address
            </label>
            <input
              value={address}
              placeholder="Address"
              variant="standard"
              onChange={(e) => setAddress(e.target.value)}
              type="text"
            />
            <label className="signup__label lastFeild">
              Restaurant's PinCode
            </label>
            <input
              value={pincode}
              placeholder="PinCode"
              variant="standard"
              onChange={(e) => setPincode(e.target.value)}
              type="password"
            />
            <label  className="signup__label lastFeild">
              Password
            </label>
            <input
              value={password}
              placeholder="Password"
              variant="standard"
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <label  className="signup__label lastFeild">
              Confirm Password
            </label>
            <input
              value={cPassword}
              placeholder="Confirm Your Password"
              variant="standard"
              onChange={(e) => handleConfirm(e.target.value)}
              type="password"
            />
            <p style={{ color: "red",fontSize:"12px" }}>{confirm_err}</p>
            <button
              className="signup__button"
              value="signUp"
              type="button"
              // onClick={PostData}
              // disabled={isLoading}
            >
              Sign Up
            </button>
            {/* </div> */}
          </form>
          <p className="signup__text">
            Already have an account?{" "}
            <Link to={"/restaurant/signin"}>
              <span className="signin__link">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
  );
};
export default SignUpRes;

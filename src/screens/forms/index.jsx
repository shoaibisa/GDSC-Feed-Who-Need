import { useState, useContext } from "react";
import styles from "./profile.module.css";
// import axios from "axios";
// import logo from "../../images/techFEST '23.webp";
import { Link, useNavigate } from "react-router-dom";
// import AuthContext from "../../auth/authContext";
// import Loader from '../Loader/Loader.js';

const UserProfileEdit = () => {
  // const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorsMade, setErrorsMade] = useState();
  const [fieldErr, setFieldErr] = useState(null);
  const [mailErr, setMailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const navigate = useNavigate();

  
  const PostData = async (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      setFieldErr("Field should not be empty");
      setTimeout(() => {
        setFieldErr(null);
      }, 3000);
      return;
    }
    if (!email.trim().includes("@")) {
      setMailErr("Invalid mail!");
      setTimeout(() => {
        setMailErr(null);
      }, 3000);
      return;
    }
    const user = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    // userLoginHandle(user);
  };

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className={styles.profile__content}>
        <div className={styles.profile__page}>
          {errorsMade && <p style={{ color: "red" }}>{errorsMade}</p>}
          <form
            method="post"
            onSubmit="return myFormValidation()"
            className={styles.profile__inputFields}
            action=""
          >
            {fieldErr && <p style={{ color: "red" }}>{fieldErr}</p>}
            {password && <p style={{ color: "red" }}>{passwordErr}</p>}
            <label htmlFor="name" className={styles.profile__label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete='off'
            />
            <label htmlFor="email" className={styles.profile__label}>
              {mailErr && <p style={{ color: "red" }}>{mailErr}</p>}
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete='off'
            />
            <label htmlFor="phone" className={styles.profile__label}>
              Contact Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              autoComplete='off'
            />
            <label htmlFor="address" className={styles.profile__label}>
              Address
            </label>
             <input
              placeholder="Enter your address"
                value={address}
              onChange={(e) => setAddress(e.target.value)}
                name="address"
              />
                 <label htmlFor="pincode" className={styles.profile__label}>
              Pin-Code
            </label>
             <input
              placeholder="Enter your pin-code"
                value={pincode}
              onChange={(e) => setPincode(e.target.value)}
                name="address"
              />
            <label htmlFor="password" className={styles.profile__label}>
              Password
            </label>
            <input
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              autoComplete='off'
            />
           
            <div className={styles.profile__div}>
              <button
                className={styles.profile__button}
                value="profile"
                type="button"
                onClick={PostData}
                disabled={isLoading}
              >
                Submit
              </button>
              {/* <Link to="/forgot-password">Forgot Password?</Link> */}
            </div>
            {/* </div> */}
          </form>
         
        </div>
      </div>
      </>
  );
};
export default UserProfileEdit;

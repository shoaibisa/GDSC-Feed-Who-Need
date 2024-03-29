import { useState, useContext } from 'react';
import styles from './signUp.module.css';
// import axios from "axios";
// import logo from "../../images/techFEST '23.webp";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
// import AuthContext from "../../auth/authContext";
// import Loader from '../Loader/Loader.js';

const SignIn = () => {
	// const authContext = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [errorsMade, setErrorsMade] = useState();
	const [fieldErr, setFieldErr] = useState(null);
	const [mailErr, setMailErr] = useState(null);
	const [passwordErr, setPasswordErr] = useState(null);
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const PostData = async (e) => {
		e.preventDefault();
		if (email.trim().length === 0 || password.trim().length === 0) {
			setFieldErr('Field should not be empty');
			setTimeout(() => {
				setFieldErr(null);
			}, 3000);
			return;
		}
		if (!email.trim().includes('@')) {
			setMailErr('Invalid Email or Password!!!');
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

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				dispatch({ type: 'LOGIN', payload: user });
				navigate('/');
			})
			.catch((error) => {
				setError(true);
			});
	};

	return (
		<>
			{/* {isLoading && <Loader />} */}
			<div className={styles.signin__content}>
				<div className={styles.signin__page}>
					{errorsMade && <p style={{ color: 'red' }}>{errorsMade}</p>}
					<form
						method="post"
						onSubmit="return myFormValidation()"
						className={styles.signin__inputFields}
						action=""
					>
						<h1 className={styles.signin__title}>Welcome!</h1>
						<p className={styles.signin__text}>
							<i>Thank You for joining us for a GOOD CAUSE!</i>
						</p>
						{fieldErr && <p style={{ color: 'red' }}>{fieldErr}</p>}
						{password && <p style={{ color: 'red' }}>{passwordErr}</p>}

						<label
							htmlFor="email"
							className={styles.signin__label}
						>
							{mailErr && <p style={{ color: 'red' }}>{mailErr}</p>}
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
							autoComplete="off"
						/>
						<label
							htmlFor="password"
							className={styles.signin__label}
						>
							Password
						</label>
						<input
							placeholder="Enter your Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							required
							autoComplete="off"
						/>

						<div className={styles.signin__div}>
							<button
								className={styles.signin__button}
								value="signIn"
								type="button"
								onClick={PostData}
								disabled={isLoading}
							>
								Sign In
							</button>
							{/* <Link to="/forgot-password">Forgot Password?</Link> */}
						</div>
						{/* </div> */}
					</form>
					<p className={styles.signin__text}>
						Don't have an account?
						<Link to={'/signup'}>
							<span className={styles.signin__link}>Sign Up</span>
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};
export default SignIn;

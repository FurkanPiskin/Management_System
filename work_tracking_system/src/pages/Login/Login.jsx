/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import "./login.css";
import photo from "../../images/user.svg";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/user-slice";


export const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [isFull,setIsFull]=useState(null);
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    getUsers();
  }, []);
  const CheckIsFull = () => {
    if (email && password) {
      setIsFull(true);
    } else {
      setIsFull(false);
    }
  };

  useEffect(() => {
    CheckIsFull();  // Email ve password değiştiğinde CheckIsFull çalışacak
  }, [email, password]);

  const LoginİsTrue = () => {
    let isAuthenticated = false;
    users.map((user) => {
      if (user.email === email && user.password === password) {
        isAuthenticated = true;
      }
    });
    if (isAuthenticated) {
      toast.success("User Login successfully!");
      navigate("/homepage"); // isLogin true olduğunda navigate çalıştırılır
    } else {
      toast.error("User email or password incorrect");
    }
  };


  const CurrentUser = () => {
    users.map((user) => {
      if (user.email === email) {
        dispatch(uiActions.setCurrentUser({ ...user }));
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    CheckIsFull();
    if(isFull){
    LoginİsTrue();
    CurrentUser();
    }
    else{
      toast.error("Please fill in all the blanks.");
    }
    
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users/");
      if (res.status === 200) {
        setUsers(res.data);
        console.log(res.data);
      }
    } catch (error) {
      toast.error("Error getting users");
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="user-wrapper">
        <img src={photo} alt="" />
      </div>

      <div className="login-header">
        <span className="active">Login</span>
        <Link to="/register">
          <span>Sign Up</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>Email</label>
          <input
            ref={emailRef}
            type="email"
            onChange={handleChangeEmail}
            value={email}
            required
          />
        </div>
        <div className="input-wrapper">
          <label>Password</label>
          <input
            ref={passwordRef}
            type="password"
            onChange={handleChangePassword}
            value={password}
            required
          />
        </div>

        <button type="submit" className="btn btn-success" onClick={handleLogin}>
          Login
        </button>

        <span>Forget your password</span>
      </form>
    </div>
  );
};

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import photo from "../../images/user.svg";
import { toast } from "react-toastify";
import axios from "axios";
import "./register.css"
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Register = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [errorMessage,setErrorMessage]=useState('');
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [telno, setTelNo] = useState("");
  const [isFull, setIsFull] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const countryRef = useRef();
  const telnoRef = useRef();

  /*const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };*/

  const checkIsFull = () => {
    // Tüm inputları kontrol edin
    if (email && name && country && telno && password) {
      setIsFull(true);  // Tüm inputlar doluysa butonu aktif hale getir
      setErrorMessage(""); // Hata mesajını temizle
    } else {
      setIsFull(false);  // Eksik alan varsa buton devre dışı kalır
      setErrorMessage("Please fill in all the blanks.");
    }
  };
  useEffect(() => {
    checkIsFull();  // Inputlar değiştikçe isFull kontrolü yapılır
  }, [email, name, country, telno, password]);
  const createUser = async () => {
    const newData = { email, password, name, country, telno };
    try {
      const res = await axios.post("http://localhost:5000/users/", newData);
      if (res.status === 200) {
        toast.success("User created successfully!");
      }
    } catch (error) {
      toast.error("Error creating user");
      console.error("Error:", error);
    }
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    checkIsFull();  // Formu göndermeden önce inputları kontrol et
    if (isFull) {
      createUser();  // Eğer tüm inputlar doluysa kullanıcı oluştur
    } else {
      toast.error(errorMessage);
    }
  };

  const handleChange = (type) => {
    if (type === "email") {
      setEmail(emailRef.current.value);
    } else if (type === "fullName") {
      setName(nameRef.current.value);
    } else if (type === "country") {
      setCountry(countryRef.current.value);
    } else if (type === "telno") {
      setTelNo(telnoRef.current.value);
    } else if (type === "password") {
      setPassword(passwordRef.current.value);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="user-wrapper">
        <img src={photo} alt="" />
      </div>

      <div className="login-header">
        <Link to="/">
          <span>Login</span>
        </Link>
        <span className="active">Sign Up</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            ref={emailRef}
            type="email"
            onChange={() => handleChange("email")}
            value={email}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="fullName">FullName</label>
          <input
            id="fullName"
            ref={nameRef}
            type="text"
            onChange={() => handleChange("fullName")}
            value={name}
          />
        </div>
        <div className="input-wrapper">
          <label>Country</label>
          <input
            ref={countryRef}
            type="text"
            onChange={() => handleChange("country")}
            value={country}
          />
        </div>
        <div className="input-wrapper">
          <label>TelNo</label>
          <input
            ref={telnoRef}
            type="text"
            onChange={() => handleChange("telno")}
            value={telno}
          />
        </div>
        <div className="input-wrapper">
          <label>Password</label>
          <input
            ref={passwordRef}
            type="password"
            onChange={() => handleChange("password")}
            value={password}
          />
        </div>
        <div className="input-wrapper">
          <label>Password(Repeat)</label>
          <input
            type="password"
            onChange={() => handleChange("password")}
            value={password}
          />
        </div>
        <button
  
  type="submit"
  className="btn btn-success"
>
  Sign In
</button>
        <label htmlFor="">{currentUser.email}</label>

        <span>Forget your password</span>
      </form>
    </div>
  );
};

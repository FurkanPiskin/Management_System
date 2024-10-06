/* eslint-disable react/prop-types */
import "./edit.css";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { fetchUsers } from "../../store/user-slice";


// eslint-disable-next-line react/prop-types
export const Edit = ({ savedUser,onBack }) => {
  
  const [user, setUser] = useState(savedUser);
  const { name, email, password, country, telno } = user;
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const updateUser = async (data, id) => {
    try {
      const res = await axios.put(`http://localhost:5000/users/${id}`, data);
      if (res.status === 200) {
        toast.success("User updated successfully!");

        // Kullanıcıyı güncelledikten sonra kullanıcı listesini tekrar yükle
        dispatch(fetchUsers());
        localStorage.setItem("currentUser", JSON.stringify(data));
       
      }
    } catch (error) {
      toast.error("Error updating user", error);
    }
  };
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(savedUser));
  }, [savedUser]);

  /*const getSingleUser = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/users/${id}`);
      console.log(savedUser.id);
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(JSON.parse(localStorage.getItem("currentUser")));
      }
    } catch (error) {
      toast.error("Error getting user", error);
    }
  };*/
  return (
    <div className="edit-page">
      <div className="input-wrapper">
        <label htmlFor="">Name</label>
        <input
          name="name"
          type="text"
          onChange={handleInputChange}
          value={name}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">Email</label>
        <input
          name="email"
          type="text"
          onChange={handleInputChange}
          value={email}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">Country</label>
        <input
          name="country"
          type="text"
          onChange={handleInputChange}
          value={country}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">TelNo</label>
        <input
          name="telno"
          type="text"
          onChange={handleInputChange}
          value={telno}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="">Password</label>
        <input
          name="password"
          type="text"
          onChange={handleInputChange}
          value={password}
        />
      </div>
      <div className="buttons">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => updateUser(user, savedUser.id)}
        >
          Save
        </button>
        <button type="button" className="btn btn-primary"
        onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

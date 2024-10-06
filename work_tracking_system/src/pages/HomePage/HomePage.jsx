/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/user-slice";
import { toast } from "react-toastify";
import "./homepage.css";

import { Edit } from "../../components/Edit/Edit";
import { Info } from "../../components/Info/Info";
import { Users } from "../../components/Users/users";

import { useNavigate } from "react-router-dom";



export const HomePage = () => {
  const dispatch = useDispatch();
 const navigate=useNavigate();
  const [isCurrent, setIsCurrent] = useState(false);
  const users = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);
 

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);
  const savedUser = JSON.parse(localStorage.getItem("currentUser"));

  const isCurrentUser = () => {
    users.map((user, index) => {
      if (user.email === savedUser.email) {
        setIsCurrent(index + 1);
      }
    });
  };

  useEffect(() => {
    if (users.length > 0) {
      isCurrentUser();
    }
  }, [users]);

  const [page, setPage] = useState("users");

  const content = (type) => {
    if (type === "edit") {
      return <Edit savedUser={savedUser}  onBack={() => setPage("users")} />;
    } else if (type === "info") {
      return <Info savedUser={savedUser}  onBack={() => setPage("users")} />;
    } else if (type === "users") {
      return <Users isCurrent={isCurrent} users={users} />;
    } /*else if (type === "roles") {
      return <Roles users={users} />;=>Bu kısım geliştirilecek
    } */else {
      return "";
    }
  };

  return (
    <div className="home-page">
      <div className="header">
        <button
          onClick={() => setPage("edit")}
          type="button"
          className="btn btn-outline-success"
        >
          Edit
        </button>
        <button
          onClick={() => setPage("users")}
          type="button"
          className="btn btn-outline-success"
        >
          Users
        </button>
        <button
          onClick={() => setPage("info")}
          type="button"
          className="btn btn-outline-success"
        >
          Info
        </button>
        <button
          onClick={() => {
            setPage("roles");
           
          }}
          type="button"
          className="btn btn-outline-success"
        >Roles</button>
         <button
          onClick={() => {
            toast.success("User Logout successfully!");
           navigate("/")
          }}
          type="button"
          className="btn btn-outline-danger"
        >Exit</button>
      </div>
      <div className="content-container">{content(page)}</div>
    </div>
  );
};

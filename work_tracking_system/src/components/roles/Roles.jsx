/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchUsers } from "../../store/user-slice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "./roles.css";

export const Roles = ({ users }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [activeUserId, setActiveUserId] = useState("");
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    const id = e.target.id;
    const index = id.split("-")[1];
    setActiveUserId(users[index].id);
  };

  const findUser = () => {
    const user = users.find((user) => user.id === activeUserId);
    setData(user);
  };

  const handleSubmit = () => {
    if (data) {
      updateUser(data, activeUserId);
    } else {
      toast.error("No user selected");
    }
  };

  useEffect(() => {
    findUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUserId]);

  const updateUser = async (data, id) => {
    try {
      const updatedData = {
        ...data,
        role: selectedRole, // `selectedRole`'ı data nesnesine ekleyin
      };

      const res = await axios.put(
        `http://localhost:5000/users/${id}`,
        updatedData
      );

      if (res.status === 200) {
        toast.success("User updated successfully!");
        dispatch(fetchUsers());
      }
    } catch (error) {
      toast.error("Error updating user", error.message);
    }
  };

  return (
    <div className="roles-wrapper">
      <h2>Roles</h2>
      <div className="titles">
        <h3>Name</h3>
        <h3>Email</h3>
      </div>
      {users.map((user, index) => (
        <div key={user.id} className="user-role">
          <div className="user-info">
            <div className="name">
              <span>{user.name}</span>
            </div>
            <div className="email">
              <span>{user.email}</span>
            </div>
          </div>
          <div className="roles-radio-button">
            <input
              type="radio"
              id={`admin-${index}`}
              name={`role${index}`}
              onChange={handleRoleChange}
              value="Admin"
            />
            <label htmlFor={`admin-${index}`}>Admin</label>

            <input
              type="radio"
              id={`project-${index}`}
              name={`role${index}`}
              onChange={handleRoleChange}
              value="ProjectManagement"
            />
            <label htmlFor={`project-${index}`}>Project Management</label>

            <input
              type="radio"
              id={`staff-${index}`}
              name={`role${index}`}
              onChange={handleRoleChange}
              value="StaffMember"
            />
            <label htmlFor={`staff-${index}`}>Staff Member</label>
          </div>
        </div>
      ))}
      <div className="roles-submit-buttons">
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-success"
        >
          Save
        </button>
        <button type="button" className="btn btn-primary">
          Back
        </button>
      </div>
    </div>
  );
};

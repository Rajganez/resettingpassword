import { useEffect, useState } from "react";
import "../App.css";
import { resetPasswordData } from "../API/axios.js";
import { useParams } from "react-router-dom";

//Final Password reset component of the User
const PasswordReset = () => {
  const intialForm = {
    newPassword: "",
    confirmNewPassword: "",
  };
  //State to receive the user new password on form change event
  const [formData, setFormData] = useState(intialForm);
  //State to hold the new password data and sent to the server
  const [newPass, setNewPass] = useState([]);
  //State to hold the error message if the new password and confirm new Password doesn't match
  const [error, setError] = useState("");
  //Received UserID as the Param
  const { token } = useParams();

  //Handle form change event and update the state of formData and error state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  //Function to send the new password data to the server for password reset
  const resetPassword = async () => {
    await resetPasswordData(newPass, token);
    alert("Password reset was successful Proceed to Login with new password");
  };

  //Update the newPass state with the formData whenever formData changes
  useEffect(() => {
    setNewPass(formData);
  }, [formData]);

  //Form submission event handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword) {
      setError("Passwords are not same");
      return;
    }

    // Handle password reset logic here
    resetPassword();
    setFormData(intialForm);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="form-container">
        <h2>Password Reset</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group mt-4">
            <label htmlFor="newPassword">
              New Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="confirmNewPassword">
              Confirm New Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          <button type="submit" className="btn btn-primary mt-4">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;

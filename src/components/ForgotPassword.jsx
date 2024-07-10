import { useEffect, useState } from "react";
import "../App.css";
import { forgotUserPasswordData } from "../API/axios.js";
import { NavLink } from "react-router-dom";

//A step before the password reset to check the User exist in the database
const ForgotPassword = () => {
  const intialForm = {
    email: "",
  };
  //State to store the form change data
  const [formData, setFormData] = useState(intialForm);
  //State to store the mailID data from the form
  const [mailID, setMailID] = useState([]);
  //State to store the error message
  const [error, setError] = useState("");
  //State to store the user ID for password reset URL parameter
  const [userIDforParam, setUserIDforParam] = useState(null);

  //Function to handle form change event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };
  //Function to send mail ID to the user and verify it
  const verifyMailID = async () => {
    try {
      const data = await forgotUserPasswordData(mailID);
      const id = data.idforParam;
      setUserIDforParam(id);
      alert("click change password button");
    } catch (error) {
      alert("User Not Found - Please Sign Up");
    }
   
  };
  //Set mail ID to the user and verify it by an API call
  useEffect(() => {
    setMailID(formData);
  }, [formData]);

  //Form submission function to send mail ID to the user and verify it by an API call
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@") || !formData.email.endsWith(".com")) {
      setError("Enter Valid Email");
      return;
    }
    verifyMailID();
    setFormData(intialForm);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="form-container">
        <h2>Enter Email</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group mt-4">
            <label htmlFor="email">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          <button type="submit" className="btn btn-primary mt-4">
            Reset
          </button>
          {userIDforParam !== null && (
            <NavLink
              to={`/passwordreset/${userIDforParam}`}
              type="submit"
              className="btn btn-primary mt-4 mx-4"
            >
              Change
            </NavLink>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

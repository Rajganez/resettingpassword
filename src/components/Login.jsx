import { useEffect, useState } from "react";
import { loginUserData } from "../API/axios.js";
import "../App.css";
import { Navigate, NavLink } from "react-router-dom";

//Login Component that logs in a user with credentials
const Login = () => {
  const intialForm = {
    email: "",
    password: "",
  };
  //State for handle form change
  const [formData, setFormData] = useState(intialForm);
  //State for storing logged in user data
  const [loginUser, setLoginUser] = useState([]);
  //State for storing error messages from DB using axios fetch
  const [error, setError] = useState("");
  //State that renders data from the DB in mounting Phase
  const [success, setSuccess] = useState(null);

  //Handle form change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  //Function to check if user is logged in and navigate to Dashboard Page
  const allowUser = async () => {
    try {
      const data = await loginUserData(loginUser);
      alert(data.msg);
      setSuccess([data]);
    } catch (error) {
      if (error) {
        alert("Invalid Credentials");
      }
    }
  };
  //User data sent to DB for fetching on mount Phase
  useEffect(() => {
    setLoginUser(formData);
  }, [formData]);

  //Form submission function to execute all operations
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@") || !formData.email.endsWith(".com")) {
      setError("Enter Valid Email");
      return;
    }
    // Handle form submission logic here
    allowUser();
    setFormData(intialForm);
  };

  //Stores UserID of the logged in user in local storage
  if (success !== null) {
    localStorage.setItem(
      "success",
      JSON.stringify(success.map((val) => val.tempUser.UserID))
    );
  }

  return (
    <div className="container mt-3 d-flex justify-content-center">
      <div className="form-container">
        <h2>Login</h2>
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
          <div className="form-group mt-4 position-relative">
            <label htmlFor="password">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <NavLink to="/forgotpassword" className="forgot-password mt-5">
              Forgotten Password?
            </NavLink>
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-lg btn-primary mt-5">
              Login
            </button>
          </div>
          <div className="col d-flex justify-content-center mt-3">
            Not a User ?
            <NavLink className="d-flex justify-content-center" to="/register">
              &nbsp;Sign Up
            </NavLink>
          </div>
        </form>
      </div>
      {success !== null && (
        <Navigate
          to={`/dashboard/${success.map((val) => val.tempUser.UserID)}`}
          replace={true}
        />
      )}
    </div>
  );
};

export default Login;

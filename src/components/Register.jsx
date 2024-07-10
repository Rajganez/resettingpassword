import { useEffect, useState } from "react";
import "../App.css";
import { getAllUsers } from "../API/axios.js";

const Register = () => {
  const intialForm = {
    name: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(intialForm);
  const [error, setError] = useState("");
  const [registerData, setRegisterData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) {
      setError("Only Numbers Allowed");
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const registeredData = async () => {
    await getAllUsers(registerData);
    alert("Registration Success!! Login with Email and Password");
  };

  useEffect(() => {
    setRegisterData(formData);
    // console.log("Form Data Submitted:", formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }
    if (!formData.email.includes("@") || !formData.email.endsWith(".com")) {
      setError("Enter Valid Email");
      return;
    } else {
      // Handle form submission logic here
      registeredData();
      setFormData(intialForm);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="form-container mt-5">
        <h2>Register</h2>
        <form className="form-content">
          <div className="form-group mt-4">
            <label htmlFor="name">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="form-group mt-4">
            <label htmlFor="phone">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
              required
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="dob">
              Date of Birth <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-4">
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
          </div>
          <div className="form-group mt-4">
            <label htmlFor="confirmPassword">
              Confirm Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

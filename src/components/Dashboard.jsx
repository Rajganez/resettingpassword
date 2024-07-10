import { useEffect, useState } from "react";
import { Link, Navigate, NavLink, useParams } from "react-router-dom";
import { dbUsers } from "../API/axios.js";

//Compoment for Individual User Interface
const Dashboard = () => {
  const [load] = useState(JSON.parse(localStorage.getItem("success")));
  const [allUsers, setAllUsers] = useState([]);
  const [variable, setVar] = useState([]);
  const { UserId } = useParams();

  //Logout Function to clear the localstorage and renders to Login Page
  const handleSubmit = () => {
    localStorage.removeItem("success");
    setVar(null);
  };
  //API Axios Call to fetch user data
  const retreiveData = async () => {
    const users = await dbUsers(UserId);
    setAllUsers([users]);
    setVar(load);
  };
  //On component mount, fetch user data
  useEffect(() => {
    retreiveData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to={`/dashboard/${UserId}`} className="navbar-brand">
            Dashboard
          </Link>
          <NavLink
            to={`/logout/${UserId}`}
            className="navbar-brand btn btn-danger"
            onClick={handleSubmit}
          >
            Logout
          </NavLink>
        </div>
      </nav>
      <div>
        <table className="table">
          {allUsers.map((val) => (
            <tbody key={val.UserId}>
              <tr>
                <th scope="row">Hi {val.data.name} !!</th>
              </tr>
              <tr>
                <td>{val.data.TempSign}</td>
                <td>Last Login</td>
              </tr>
              <tr>
                <td>{val.data.SigOut}</td>
                <td>Last Logout Time</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {variable === null && <Navigate to={"/login"} replace={true} />}
    </>
  );
};

export default Dashboard;

import { useEffect } from "react";
import { loggingOut } from "../API/axios.js";
import { useParams } from "react-router-dom";

const Logout = () => {
  //Get UserId using Param
  const { UserId } = useParams();
  //Logout UserId Calls API to Store the Signout Time of the User Onclick of Logout button
  const outTime = async () => {
    await loggingOut(UserId);
  };
  //Redirect to Home Page after 2 seconds of Logout
  useEffect(() => {
    outTime();
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Logout;

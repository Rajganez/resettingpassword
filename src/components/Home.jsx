import { Outlet } from "react-router-dom";
import Login from "./Login";

const Home = () => {
  return (
    <div>
      <Login />
      <Outlet />
    </div>
  );
};

export default Home;
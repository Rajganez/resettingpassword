import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PasswordReset from "./components/PasswordReset";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/passwordreset/:idforParam" element={<PasswordReset />} />
            <Route path="/dashboard/:UserId" element={<Dashboard/>}/>
            <Route path="/logout/:UserId" element={<Logout/>}/>
          </Route>
          <Route
            path="*"
            element={<PageNotFound/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import axios from "axios";

const baseUrl = "https://password-reset-hm66.onrender.com";
const resInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Access-Control-Allow-Credentials": "true",
    "X-Custom-Header": "foobar",
  },
});

const getAllUsers = async (registerData) => {
  const response = await resInstance.post("/register", registerData);
  return response.data;
};

const loginUserData = async (loginData) => {
  const response = await resInstance.post("/login", loginData);
  return response.data;
};

const forgotUserPasswordData = async (emailData) => {
  
  try {
    const response = await resInstance.post("/forgotpassword", emailData);
    if(response.status === 401){
      throw new Error("401");
     }
     return response.data;
  } catch (error) {
    if(error.msg === "401"){
      throw new Error("Expired");
    }else {
      throw new Error(error.message);
    }
  }
 
  
};

const resetPasswordData = async (newPassData, token) => {
  const response = await resInstance.post(
    `/passwordreset/${token}`,
    newPassData
  );
  return response.data;
};

const dbUsers = async (UserId) => {
  const response = await resInstance.get(`/dashboard/${UserId}`);
  return response.data;
};

const loggingOut = async (UserId) => {
  const response = await resInstance.post(`/logout/${UserId}`);
  return response.data;
}

export {
  getAllUsers,
  loginUserData,
  forgotUserPasswordData,
  resetPasswordData,
  dbUsers,
  loggingOut
};

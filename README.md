# Password Reset Application

## Overview :

This application makes the user to login with their own login credentials i.e., Mail ID and Password

User Can also change their password using Forgot Password and reset the old Password

New User can be added to the database with the required data

## Features :

_Used JsonWebToken for creating a string on User login with the expiry time of One hour_

_In this Application it performs all opertions like (Register/Sign Up, Login, Forgot Password/Resetting Password, and Logout )_

_Registration Page (Register.jsx)_
_With Below Fields_

> Name
> Email_ID
> Phone
> DOB
> Password
> Confirm Password

_Login Page with Below fields (login.jsx)_

> Name
> Password

With Addtional NavLinks (Forgotten Password)

And a Submit Button

_In Forgotten Password page (ForgotPassword.jsx)_

> Email_ID

and a Reset button If Mail is available in DB Redirect to Password Reset Page

_In PasswordReset.jsx Page_

> New Password
> Confirm Password

and a Reset Button to Finally Reset Password Operation is Done

_In Dashboard.jsx Page_

> Individual User Login and Logout time is Displayed to show the perfect Login and Logout Operation

_Logout.jsx Page_

> Captures the Logout time of the User and Stores it in the DB

## Getting Started

**Deployed URLs**
**To View the Project visit the FrontEnd URL**

*https://passwordresetbyraj.netlify.app/* - FrontEnd URL

*https://password-reset-hm66.onrender.com* - API Call Backend URL

*https://documenter.getpostman.com/view/34103499/2sA3e48oL6* - View in Postman for API Call Backend URL

**Technologies Used :**

_React + Vite + Bootstrap_ - Frontend

_Node JS + Express-Server JS_ - Backend

_Axios_ - For API fetch

_MongoDB Atlas_ - Server Database

import { Link } from "react-router-dom";

//A Simple Page not Found Component
const PageNotFound = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="display-4">Page Not Found</h2>
      <p className="lead">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary mt-4">
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;

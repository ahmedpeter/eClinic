import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <section className="banner_splash">
      <div className="welcome d-flex align-items-center justify-content-center vh-100">
        <div className="text-center pb-5 mb-5">
          <div className="mb-5">
            <img
              src="img/logo.svg"
              className="img-fluid blue-logo mb-3"
              alt=""
            />
            <h1 className="text-primary mb-1">Quick Clinic</h1>
            <p className="text-muted">Welcom to Quick Clinic</p>
          </div>
        </div>
      </div>

      <div className="footer fixed-bottom d-grid gap-3 m-4">
        <Link to="/auth/login" className="btn btn-info btn-lg">
          Sign In
        </Link>
        <Link to="/auth/register" className="btn btn-outline-info btn-lg">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default WelcomeScreen;

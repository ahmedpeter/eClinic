import react from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const onEnter = (e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      // loginHandler();
      console.log("enter pressed");
    }
  };
  return <div>Login Works</div>;
};

export default Login;

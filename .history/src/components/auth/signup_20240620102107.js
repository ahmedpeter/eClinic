import { Link } from "react-router-dom";

const SignUp = () => {
  const onEnter = (e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      console.log("enter pressed");
    }
  };

  return <div>Sign up works</div>;
};

export default SignUp;

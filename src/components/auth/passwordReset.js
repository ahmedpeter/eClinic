import { Link } from "react-router-dom";

const ResetPassword = () => {
  const onEnter = (e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      console.log("enter pressed");
    }
  };

  return <section>Password Reset Works</section>;
};

export default ResetPassword;

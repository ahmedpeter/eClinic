import { Link } from "react-router-dom";

const NewPasswordPage = () => {
  const onEnter = (e) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      console.log("enter pressed");
    }
  };

  return <section>New Password Component</section>;
};

export default NewPasswordPage;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import YoutubeForm from "./components/YoutubeForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import EnrollmentForm from "./components/EnrollmentForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        {/* <YoutubeForm /> */}
        {/* <FormikContainer /> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */}
        <EnrollmentForm />
      </div>
    </>
  );
}

export default App;

import SignUp from "pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import "./i18n";
import ResetPassword from "pages/ResetPassword/ResetPassword";

function App() {
  return (
    <div>
      <Login />
      <SignUp />
      <ResetPassword />
    </div>
  );
}

export default App;

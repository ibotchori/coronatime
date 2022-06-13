import SignUp from "pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import "./i18n";
import ResetPassword from "pages/ResetPassword/ResetPassword";
import NewPassword from "pages/NewPassword/NewPassword";
import Confirmation from "pages/Confirmation/Confirmation";

function App() {
  return (
    <div>
      <Login />
      <SignUp />
      <ResetPassword />
      <NewPassword />
      <Confirmation />
    </div>
  );
}

export default App;

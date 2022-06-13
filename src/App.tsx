import SignUp from "pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import "./i18n";
import ResetPassword from "pages/ResetPassword/ResetPassword";
import NewPassword from "pages/NewPassword/NewPassword";
import Confirmation from "pages/Confirmation/Confirmation";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

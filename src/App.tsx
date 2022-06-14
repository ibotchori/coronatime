import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Login,
  SignUp,
  ResetPassword,
  EmailConfirmation,
  PasswordConfirmation,
  NewPassword,
  AccountConfirmation,
} from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route
          path="/password-confirmation"
          element={<PasswordConfirmation />}
        />
        <Route path="/account-confirmation" element={<AccountConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

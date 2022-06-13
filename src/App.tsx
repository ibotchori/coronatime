import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Login,
  SignUp,
  ResetPassword,
  Confirmation,
  NewPassword,
} from "./pages/";

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

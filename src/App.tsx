import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
export const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

import "./App.css";
import Detailspage from "./components/Dpublicacion";
import Login from "./registerUser/Login";
import RegisterUser from "./registerUser/RegisterUser";
import Detailperson from "./views/Dperson";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />d
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/detail-person" element={<Detailperson />} />
      <Route path="/post" element={<Detailspage />} />
    </Routes>
  );
}

export default App;

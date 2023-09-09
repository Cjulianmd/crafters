import "./App.css";
import Detailperson from "./views/Dperson";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-person" element={<Detailperson />} />
    </Routes>
  );
}

export default App;

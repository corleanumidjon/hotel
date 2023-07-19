import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Auth/Register/Register";
import Login from "./Pages/Auth/Login/Login";
import "./App.scss";
import SearchHotels from "./Pages/SearchHotels/SearchHotels";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/srchotels" element={<SearchHotels />} />
      </Routes>
    </div>
  );
}

export default App;

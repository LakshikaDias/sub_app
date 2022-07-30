import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

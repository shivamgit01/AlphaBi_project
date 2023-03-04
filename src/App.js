import "./App.css";
import Searchbar from "./components/Searchbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gifs" element={<Searchbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

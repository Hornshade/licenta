import NavbarComp from "./components/NavbarComp";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shoping from "./pages/Shoping";
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <NavbarComp />
      <div className="content">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shoping" element={<Shoping />} />
        </Routes>
      </div>
      
    </div>
    </Router>
  );
}

export default App;

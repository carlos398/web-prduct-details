import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import './css/App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="Container">
      <main>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;

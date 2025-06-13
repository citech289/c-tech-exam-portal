import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return <div>
    <Routes>
      <Route path="/" element={<><Navbar/></>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/contact" element={<h1>Contact Page</h1>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  </div>;
}

export default App;

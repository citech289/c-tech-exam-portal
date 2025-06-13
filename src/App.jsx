import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegistrationForm from "./routes/RegistrationForm";
import LoginForm from "./components/LoginForm ";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LoginForm />
            </>
          }
        />
        <Route
          path="/RegistrationForm"
          element={
            <>
              <Navbar />
              <RegistrationForm />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

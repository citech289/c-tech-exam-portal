import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegistrationForm from "./routes/RegistrationForm";
import LoginForm from "./components/LoginForm ";
import Header from "./components/Header";
import ForgotPass from "./routes/ForgotPass";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header/>
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
        <Route
          path="/ForgotPass"
          element={
            <>
              <Navbar />
              <ForgotPass />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

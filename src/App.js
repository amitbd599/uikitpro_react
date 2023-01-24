import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserVerificationPage from "./Pages/UserVerificationPage";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/welcome' element={<WelcomePage />} />
        <Route
          exact
          path='/user-verification'
          element={<UserVerificationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotificationPage from "./Pages/NotificationPage";
import OpenInnerPage from "./Pages/OpenInnerPage";
import SavingPage from "./Pages/SavingPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import TransactionDetailsPage from "./Pages/TransactionDetailsPage";
import TransactionPage from "./Pages/TransactionPage";
import UserSettingPage from "./Pages/UserSettingPage";
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
        <Route exact path='/user-setting' element={<UserSettingPage />} />
        <Route exact path='/transaction' element={<TransactionPage />} />
        <Route
          exact
          path='/transaction-details'
          element={<TransactionDetailsPage />}
        />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route exact path='/signin' element={<SignInPage />} />
        <Route exact path='/saving' element={<SavingPage />} />
        <Route exact path='/open-inner' element={<OpenInnerPage />} />
        <Route exact path='/notification' element={<NotificationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

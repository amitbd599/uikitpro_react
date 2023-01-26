import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentsTabsPage from "./Pages/ComponentsTabsPage";
import ComponentsTitlePage from "./Pages/ComponentsTitlePage";
import ComponentsToastPage from "./Pages/ComponentsToastPage";
import ComponentsTogglePage from "./Pages/ComponentsTogglePage";
import ComponentsTooltipPage from "./Pages/ComponentsTooltipPage";
import ComponentsTypographyPage from "./Pages/ComponentsTypographyPage";
import ContactPage from "./Pages/ContactPage";
import HomePage_1 from "./Pages/HomePage_1";
import HomePage_2 from "./Pages/HomePage_2";
import NotificationPage from "./Pages/NotificationPage";
import OpenInnerPage from "./Pages/OpenInnerPage";
import SavingPage from "./Pages/SavingPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import TransactionDetailsPage from "./Pages/TransactionDetailsPage";
import TransactionPage from "./Pages/TransactionPage";
import UserSettingPage from "./Pages/UserSettingPage";
import UserVerificationPage from "./Pages/UserVerificationPage";
import ViewPage from "./Pages/ViewPage";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  const darkBG = localStorage.getItem("color");
  console.log(darkBG);
  return (
    <div className={darkBG}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ViewPage />} />
          <Route exact path='/home-1' element={<HomePage_1 />} />
          <Route exact path='/home-2' element={<HomePage_2 />} />
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
          <Route exact path='/contact' element={<ContactPage />} />
          <Route
            exact
            path='/components-typography'
            element={<ComponentsTypographyPage />}
          />
          <Route
            exact
            path='/components-tooltip'
            element={<ComponentsTooltipPage />}
          />
          <Route
            exact
            path='/components-toggle'
            element={<ComponentsTogglePage />}
          />
          <Route
            exact
            path='/components-toast'
            element={<ComponentsToastPage />}
          />
          <Route
            exact
            path='/components-title'
            element={<ComponentsTitlePage />}
          />
          <Route
            exact
            path='/components-tabs'
            element={<ComponentsTabsPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

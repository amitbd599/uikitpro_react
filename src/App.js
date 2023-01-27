import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgressPage from "./Pages/ProgressPage";
import RadioPage from "./Pages/RadioPage";
import SuccessPage from "./Pages/SuccessPage";
import TablePage from "./Pages/TablePage";
import TabsPage from "./Pages/TabsPage";
import TitlePage from "./Pages/TitlePage";
import ToastPage from "./Pages/ToastPage";
import TogglePage from "./Pages/TogglePage";
import TooltipPage from "./Pages/TooltipPage";
import TypographyPage from "./Pages/TypographyPage";
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
import NotificationsPage from "./Pages/NotificationsPage";
import ModalPage from "./Pages/ModalPage";
import ListViewPage from "./Pages/ListViewPage";

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
            element={<TypographyPage />}
          />
          <Route exact path='/components-tooltip' element={<TooltipPage />} />
          <Route exact path='/components-toggle' element={<TogglePage />} />
          <Route exact path='/components-toast' element={<ToastPage />} />
          <Route exact path='/components-title' element={<TitlePage />} />
          <Route exact path='/components-tabs' element={<TabsPage />} />
          <Route exact path='/components-table' element={<TablePage />} />
          <Route exact path='/components-success' element={<SuccessPage />} />
          <Route exact path='/components-search' element={<SuccessPage />} />
          <Route exact path='/components-radio' element={<RadioPage />} />
          <Route exact path='/components-progress' element={<ProgressPage />} />
          <Route
            exact
            path='/components-notifications'
            element={<NotificationsPage />}
          />
          <Route exact path='/components-modal' element={<ModalPage />} />
          <Route exact path='/components-listview' element={<ListViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

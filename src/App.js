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
import InsetPage from "./Pages/InsetPage";
import ImagePage from "./Pages/ImagePage";
import IcondPage from "./Pages/IcondPage";
import IntroPopPage from "./Pages/IntroPopPage";
import AllHeaderPage from "./Pages/AllHeaderPage";
import ErrorIntroPage from "./Pages/ErrorIntroPage";
import DropdownPage from "./Pages/DropdownPage";
import DialogPage from "./Pages/DialogPage";
import DepositPage from "./Pages/DepositPage";
import ContentPage from "./Pages/ContentPage";
import CheckboxPage from "./Pages/CheckboxPage";
import CarouselPage from "./Pages/CarouselPage";
import ButtonsPage from "./Pages/ButtonsPage";
import BadgePage from "./Pages/BadgePage";
import PaymentPopupPage from "./Pages/PaymentPopupPage";
import AlertsPage from "./Pages/AlertsPage";
import AddHomePage from "./Pages/AddHomePage";
import ActionPage from "./Pages/ActionPage";
import AccordionIntroPage from "./Pages/AccordionIntroPage";
import AllIntroPage from "./Pages/AllIntroPage";
import CartsPage from "./Pages/CartsPage";
import BlogPage from "./Pages/BlogPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import BillPayPage from "./Pages/BillPayPage";

function App() {
  const darkBG = localStorage.getItem("color");
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
          <Route exact path='/blog' element={<BlogPage />} />
          <Route exact path='/blog-details' element={<BlogDetailsPage />} />
          <Route exact path='/bill-pay' element={<BillPayPage />} />
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
          <Route exact path='/components-inset' element={<InsetPage />} />
          <Route exact path='/components-image' element={<ImagePage />} />
          <Route exact path='/components-icond' element={<IcondPage />} />
          <Route exact path='/components-intro' element={<IntroPopPage />} />
          <Route exact path='/components-header' element={<AllHeaderPage />} />
          <Route exact path='/components-error' element={<ErrorIntroPage />} />
          <Route exact path='/components-dropdown' element={<DropdownPage />} />
          <Route exact path='/components-dialog' element={<DialogPage />} />
          <Route exact path='/components-deposit' element={<DepositPage />} />
          <Route exact path='/components-content' element={<ContentPage />} />
          <Route exact path='/components-checkbox' element={<CheckboxPage />} />
          <Route exact path='/components-carousel' element={<CarouselPage />} />
          <Route exact path='/components-buttons' element={<ButtonsPage />} />
          <Route exact path='/components-badge' element={<BadgePage />} />
          <Route
            exact
            path='/components-payment-popup'
            element={<PaymentPopupPage />}
          />
          <Route exact path='/components-alerts' element={<AlertsPage />} />
          <Route exact path='/components-add-home' element={<AddHomePage />} />
          <Route exact path='/components-action' element={<ActionPage />} />
          <Route
            exact
            path='/components-accordion'
            element={<AccordionIntroPage />}
          />
          <Route exact path='/all-intro' element={<AllIntroPage />} />
          <Route exact path='/carts' element={<CartsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

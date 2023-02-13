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
import AllLinkPage from "./Pages/AllLinkPage";
import AboutPage from "./Pages/AboutPage";
import SearchPage from "./Pages/SearchPage";

// === RTL Import

import RTLProgressPage from "./RTLPages/ProgressPage";
import RTLRadioPage from "./RTLPages/RadioPage";
import RTLSuccessPage from "./RTLPages/SuccessPage";
import RTLTablePage from "./RTLPages/TablePage";
import RTLTabsPage from "./RTLPages/TabsPage";
import RTLTitlePage from "./RTLPages/TitlePage";
import RTLToastPage from "./RTLPages/ToastPage";
import RTLTogglePage from "./RTLPages/TogglePage";
import RTLTooltipPage from "./RTLPages/TooltipPage";
import RTLTypographyPage from "./RTLPages/TypographyPage";
import RTLContactPage from "./RTLPages/ContactPage";
import RTLHomePage_1 from "./RTLPages/HomePage_1";
import RTLHomePage_2 from "./RTLPages/HomePage_2";
import RTLNotificationPage from "./RTLPages/NotificationPage";
import RTLOpenInnerPage from "./RTLPages/OpenInnerPage";
import RTLSavingPage from "./RTLPages/SavingPage";
import RTLSignInPage from "./RTLPages/SignInPage";
import RTLSignUpPage from "./RTLPages/SignUpPage";
import RTLTransactionDetailsPage from "./RTLPages/TransactionDetailsPage";
import RTLTransactionPage from "./RTLPages/TransactionPage";
import RTLUserSettingPage from "./RTLPages/UserSettingPage";
import RTLUserVerificationPage from "./RTLPages/UserVerificationPage";
import RTLViewPage from "./RTLPages/ViewPage";
import RTLWelcomePage from "./RTLPages/WelcomePage";
import RTLNotificationsPage from "./RTLPages/NotificationsPage";
import RTLModalPage from "./RTLPages/ModalPage";
import RTLListViewPage from "./RTLPages/ListViewPage";
import RTLInsetPage from "./RTLPages/InsetPage";
import RTLImagePage from "./RTLPages/ImagePage";
import RTLIcondPage from "./RTLPages/IcondPage";
import RTLIntroPopPage from "./RTLPages/IntroPopPage";
import RTLAllHeaderPage from "./RTLPages/AllHeaderPage";
import RTLErrorIntroPage from "./RTLPages/ErrorIntroPage";
import RTLDropdownPage from "./RTLPages/DropdownPage";
import RTLDialogPage from "./RTLPages/DialogPage";
import RTLDepositPage from "./RTLPages/DepositPage";
import RTLContentPage from "./RTLPages/ContentPage";
import RTLCheckboxPage from "./RTLPages/CheckboxPage";
import RTLCarouselPage from "./RTLPages/CarouselPage";
import RTLButtonsPage from "./RTLPages/ButtonsPage";
import RTLBadgePage from "./RTLPages/BadgePage";
import RTLPaymentPopupPage from "./RTLPages/PaymentPopupPage";
import RTLAlertsPage from "./RTLPages/AlertsPage";
import RTLAddHomePage from "./RTLPages/AddHomePage";
import RTLActionPage from "./RTLPages/ActionPage";
import RTLAccordionIntroPage from "./RTLPages/AccordionIntroPage";
import RTLAllIntroPage from "./RTLPages/AllIntroPage";
import RTLCartsPage from "./RTLPages/CartsPage";
import RTLBlogPage from "./RTLPages/BlogPage";
import RTLBlogDetailsPage from "./RTLPages/BlogDetailsPage";
import RTLBillPayPage from "./RTLPages/BillPayPage";
import RTLAllLinkPage from "./RTLPages/AllLinkPage";
import RTLAboutPage from "./RTLPages/AboutPage";
import RTLSearchPage from "./RTLPages/SearchPage";

function App() {
  const darkBG = localStorage.getItem("color");
  return (
    <section className={darkBG}>
      <BrowserRouter>
        <Routes>
          {/* ====================== For English Version ====================== */}
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
          <Route exact path='/components-search' element={<SearchPage />} />
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
          <Route exact path='/all-page' element={<AllLinkPage />} />
          <Route exact path='/about' element={<AboutPage />} />

          {/* ====================== For English Version ====================== */}

          <Route exact path='/rtl' element={<RTLViewPage />} />
          <Route exact path='/rtl-home-1' element={<RTLHomePage_1 />} />
          <Route exact path='/rtl-home-2' element={<RTLHomePage_2 />} />
          <Route exact path='/rtl-welcome' element={<RTLWelcomePage />} />
          <Route
            exact
            path='/rtl-user-verification'
            element={<RTLUserVerificationPage />}
          />
          <Route
            exact
            path='/rtl-user-setting'
            element={<RTLUserSettingPage />}
          />
          <Route
            exact
            path='/rtl-transaction'
            element={<RTLTransactionPage />}
          />
          <Route
            exact
            path='/rtl-transaction-details'
            element={<RTLTransactionDetailsPage />}
          />
          <Route exact path='/rtl-signup' element={<RTLSignUpPage />} />
          <Route exact path='/rtl-blog' element={<RTLBlogPage />} />
          <Route
            exact
            path='/rtl-blog-details'
            element={<RTLBlogDetailsPage />}
          />
          <Route exact path='/rtl-bill-pay' element={<RTLBillPayPage />} />
          <Route exact path='/rtl-signin' element={<RTLSignInPage />} />
          <Route exact path='/rtl-saving' element={<RTLSavingPage />} />
          <Route exact path='/rtl-open-inner' element={<RTLOpenInnerPage />} />
          <Route
            exact
            path='/rtl-notification'
            element={<RTLNotificationPage />}
          />
          <Route exact path='/rtl-contact' element={<RTLContactPage />} />
          <Route
            exact
            path='/rtl-components-typography'
            element={<RTLTypographyPage />}
          />
          <Route
            exact
            path='/rtl-components-tooltip'
            element={<RTLTooltipPage />}
          />
          <Route
            exact
            path='/rtl-components-toggle'
            element={<RTLTogglePage />}
          />
          <Route
            exact
            path='/rtl-components-toast'
            element={<RTLToastPage />}
          />
          <Route
            exact
            path='/rtl-components-title'
            element={<RTLTitlePage />}
          />
          <Route exact path='/rtl-components-tabs' element={<RTLTabsPage />} />
          <Route
            exact
            path='/rtl-components-table'
            element={<RTLTablePage />}
          />
          <Route
            exact
            path='/rtl-components-success'
            element={<RTLSuccessPage />}
          />
          <Route
            exact
            path='/rtl-components-search'
            element={<RTLSearchPage />}
          />
          <Route
            exact
            path='/rtl-components-radio'
            element={<RTLRadioPage />}
          />
          <Route
            exact
            path='/rtl-components-progress'
            element={<RTLProgressPage />}
          />
          <Route
            exact
            path='/rtl-components-notifications'
            element={<RTLNotificationsPage />}
          />
          <Route
            exact
            path='/rtl-components-modal'
            element={<RTLModalPage />}
          />
          <Route
            exact
            path='/rtl-components-listview'
            element={<RTLListViewPage />}
          />
          <Route
            exact
            path='/rtl-components-inset'
            element={<RTLInsetPage />}
          />
          <Route
            exact
            path='/rtl-components-image'
            element={<RTLImagePage />}
          />
          <Route
            exact
            path='/rtl-components-icond'
            element={<RTLIcondPage />}
          />
          <Route
            exact
            path='/rtl-components-intro'
            element={<RTLIntroPopPage />}
          />
          <Route
            exact
            path='/rtl-components-header'
            element={<RTLAllHeaderPage />}
          />
          <Route
            exact
            path='/rtl-components-error'
            element={<RTLErrorIntroPage />}
          />
          <Route
            exact
            path='/rtl-components-dropdown'
            element={<RTLDropdownPage />}
          />
          <Route
            exact
            path='/rtl-components-dialog'
            element={<RTLDialogPage />}
          />
          <Route
            exact
            path='/rtl-components-deposit'
            element={<RTLDepositPage />}
          />
          <Route
            exact
            path='/rtl-components-content'
            element={<RTLContentPage />}
          />
          <Route
            exact
            path='/rtl-components-checkbox'
            element={<RTLCheckboxPage />}
          />
          <Route
            exact
            path='/rtl-components-carousel'
            element={<RTLCarouselPage />}
          />
          <Route
            exact
            path='/rtl-components-buttons'
            element={<RTLButtonsPage />}
          />
          <Route
            exact
            path='/rtl-components-badge'
            element={<RTLBadgePage />}
          />
          <Route
            exact
            path='/rtl-components-payment-popup'
            element={<RTLPaymentPopupPage />}
          />
          <Route
            exact
            path='/rtl-components-alerts'
            element={<RTLAlertsPage />}
          />
          <Route
            exact
            path='/rtl-components-add-home'
            element={<RTLAddHomePage />}
          />
          <Route
            exact
            path='/rtl-components-action'
            element={<RTLActionPage />}
          />
          <Route
            exact
            path='/rtl-components-accordion'
            element={<RTLAccordionIntroPage />}
          />
          <Route exact path='/rtl-all-intro' element={<RTLAllIntroPage />} />
          <Route exact path='/rtl-carts' element={<RTLCartsPage />} />
          <Route exact path='/rtl-all-page' element={<RTLAllLinkPage />} />
          <Route exact path='/rtl-about' element={<RTLAboutPage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;

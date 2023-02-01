import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ContactComponent = React.lazy(() =>
  import("../Components/RootComponents/ContactComponent")
);
const ContactPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Contact || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ContactComponent />
      </Suspense>
    </Fragment>
  );
};

export default ContactPage;

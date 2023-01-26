import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ContactComponent = React.lazy(() =>
  import("../Components/RootComponents/ContactComponent")
);
const ContactPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
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

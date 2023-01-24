import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const UserVerificationComponent = React.lazy(() =>
  import("../Components/RootComponents/UserVerificationComponent")
);
const UserVerificationPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Home || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <UserVerificationComponent />
      </Suspense>
    </Fragment>
  );
};

export default UserVerificationPage;

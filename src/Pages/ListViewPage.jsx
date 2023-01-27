import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ListViewComponent = React.lazy(() =>
  import("../Components/RootComponents/ListViewComponent")
);
const ListViewPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>ListView || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ListViewComponent />
      </Suspense>
    </Fragment>
  );
};

export default ListViewPage;

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
          <title>
            List View || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <ListViewComponent />
      </Suspense>
    </Fragment>
  );
};

export default ListViewPage;

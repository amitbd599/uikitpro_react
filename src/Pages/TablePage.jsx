import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TableComponent = React.lazy(() =>
  import("../Components/RootComponents/TableComponent")
);
const TablePage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Components Table || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <TableComponent />
      </Suspense>
    </Fragment>
  );
};

export default TablePage;

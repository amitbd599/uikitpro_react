import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const TableComponent = React.lazy(() =>
  import("../Components/RootComponents/TableComponent")
);
const TablePage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
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

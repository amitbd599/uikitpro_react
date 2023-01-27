import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const SearchComponent = React.lazy(() =>
  import("../Components/RootComponents/SearchComponent")
);
const SearchPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Success || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <SearchComponent />
      </Suspense>
    </Fragment>
  );
};

export default SearchPage;

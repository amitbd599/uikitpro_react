import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const SearchComponent = React.lazy(() =>
  import("../Components/RootComponents/SearchComponent")
);
const SearchPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Search || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <SearchComponent />
      </Suspense>
    </Fragment>
  );
};

export default SearchPage;

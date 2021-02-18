import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Spinner } from "./Spinner";
import { TopBar } from "./TopBar";
import "./../assets/scss/App.scss";
import { Footer } from "./Footer";
import PromoHeader from "./PromoHeader";

const Home = React.lazy(
  (): Promise<any> => import(/* webpackChunkName: "home" */ "./Home")
);

const Contact = React.lazy(
  (): Promise<any> => import(/* webpackChunkName: "contact" */ "./Contact")
);

const Category = React.lazy(
  (): Promise<any> => import(/* webpackChunkName: "contact" */ "./Category")
);

const ShopifyCollection = React.lazy(
  (): Promise<any> =>
    import(/* webpackChunkName: "shopifyCollection" */ "./ShopifyCollection")
);

const Sitemap = React.lazy(
  (): Promise<any> => import(/* webpackChunkName: "sitemap" */ "./Sitemap")
);
const PageNotFound = React.lazy(
  (): Promise<any> =>
    import(/* webpackChunkName: "pagenotfound" */ "./PageNotFound")
);

const Routes = (): Router => {
  return (
    <Router>
      <TopBar />
      <PromoHeader />
      <React.Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/contact" component={Contact} />
          <Route exact={true} path="/category/" component={Category} />

          <Route
            exact={true}
            path="/collection/best-sellers"
            component={ShopifyCollection}
          />

          <Route
            exact={true}
            path="/collection/accessories"
            component={ShopifyCollection}
          />

          <Route
            exact={true}
            path="/collection/pyjamas"
            component={ShopifyCollection}
          />

          <Route
            exact={true}
            path="/collection/coats-&-hoodies"
            component={ShopifyCollection}
          />

          <Route
            exact={true}
            path="/collection/romper-suits"
            component={ShopifyCollection}
          />

          <Route
            exact={true}
            path="/collection/matching-sets"
            component={ShopifyCollection}
          />

          <Route exact={true} path="/sitemap" component={Sitemap} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Suspense>
      <Footer />
    </Router>
  );
};

export default Routes;

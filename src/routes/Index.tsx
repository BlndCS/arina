import { Error, NotFound } from "@/pages";
import Home from "@/pages/Home";
import RootLayout from "@/pages/layout/RootLayout";
import RootRouterProvider from "@/providers/RootRouterProvider";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <>
        {/* Auth Routes */}
        <Route
          path="/"
          errorElement={<Error />}
          element={<RootRouterProvider Component={RootLayout} />}>
          <Route index errorElement={<Error />} element={<Home />} />
        </Route>
      </>
      <Route errorElement={<Error />} element={<NotFound />} path="*" />
    </>
  )
);

export default router;

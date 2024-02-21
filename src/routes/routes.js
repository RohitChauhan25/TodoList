import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import ROUTES from "../constant/routes";
import PrivateRoute from "./private/privateRout";
import PublicRoute from "./public/publicRoute";

function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {/* <Route path="*" element={<LazyNotFoundPage />} /> */}
        {ROUTES.map((route, index) => {
          const { component: Component, path, restricted } = route;
          return (
            <Route
              key={index}
              path={path}
              element={
                restricted ? (
                  <PrivateRoute component={Component} />
                ) : (
                  <PublicRoute restricted={false} component={Component} />
                )
              }
            />
          );
        })}
      </ReactRoutes>
    </BrowserRouter>
  );
}

export default Routes;

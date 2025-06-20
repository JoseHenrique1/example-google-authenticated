import { BrowserRouter, Routes, Route } from "react-router";

import { App } from "./pages/app";
import { PrivateRoute } from "./pages/private-route";
import { MiddlewarePrivateRoute } from "./components/middleware-private-route";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/private-route" element={
          <MiddlewarePrivateRoute>
            <PrivateRoute />
          </MiddlewarePrivateRoute>
          } />
      </Routes>
    </BrowserRouter>
  )
}
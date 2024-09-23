import React, { lazy, Suspense, memo } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./utilities/Layout.jsx"; // Layout could also be memoized if needed
import { BarLoader } from "react-spinners";
import Profile from "./pages/profile/profile.jsx";
import Settings from "./pages/settings/settings.jsx";
import Logout from "./pages/logout/logout.jsx";

const Home = lazy(() => import("./pages/home/Home.jsx"));
const Create = lazy(() => import("./pages/create/Create.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));

const MemoizedLayout = memo(Layout);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MemoizedLayout />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />

          <Route path="*" element={<NotFound />} />
    </Route>
    </>

  )
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="loader-container">
          <BarLoader color="#ffffff" width={150} />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

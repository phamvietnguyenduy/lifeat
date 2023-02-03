import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";

//Pages
const Home = lazy(() => import("./pages/Home/Home"));
const Explore = lazy(() => import("./pages/Explore/Explore"));
const Help = lazy(() => import("./pages/Help/Help"));

function App() {
  // const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/abc" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <BaseLayout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/explore" element={<Explore />} />
              <Route path="/help/*" element={<Help />} />
            </Routes>
          </BaseLayout>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

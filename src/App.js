import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";

//Pages
const Home = lazy(() => import("./pages/Home/Home"));
const Explore = lazy(() => import("./pages/Explore/Explore"));
const Help = lazy(() => import("./pages/Help/Help"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <BaseLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </BaseLayout>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

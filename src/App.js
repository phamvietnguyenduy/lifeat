import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";

//Pages
const Home = lazy(() => import("./pages/Home/Home"));
const Explore = lazy(() => import("./pages/Explore/Explore"));

function App() {
  return (
    <>
      <BrowserRouter>
        <BaseLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
            </Routes>
          </Suspense>
        </BaseLayout>
      </BrowserRouter>
    </>
  );
}

export default App;

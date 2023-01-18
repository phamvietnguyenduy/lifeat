import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";

//Pages
const Home = lazy(() => import("./pages/Home/Home"));
function App() {
  return (
    <>
      <BaseLayout>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/*" element={<Home />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </BaseLayout>
    </>
  );
}

export default App;

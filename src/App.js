import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import ListSpace from "./pages/Home/ListSpace";

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
              <Route path="/space" element={<ListSpace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </BaseLayout>
    </>
  );
}

export default App;

import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Details from "./pages/Help/Details";
import Typed from "react-typed";
import { Circles } from "react-loading-icons";
//Pages
const Home = lazy(() => import("./pages/Home/Home"));
const Explore = lazy(() => import("./pages/Explore/Explore"));
const Help = lazy(() => import("./pages/Help/Help"));
const SpaceHeader = lazy(() => import("./components/SpaceHeader"));
const Showcase = lazy(() => import("./pages/Showcase/Showcase"));
const Career = lazy(() => import("./pages/Career/Career"));
const Howwork = lazy(() => import("./pages/Howwork/Howwork"));

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <Circles color="black" />
      </div>

      <h1 className="font-bold text-6xl">
        <span>Loading</span>
        <Typed string={"..."} typeSpeed={150} backSpeed={100} loop />
      </h1>
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <BaseLayout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/space" element={<SpaceHeader />} />
              <Route exact path="/explore" element={<Explore />} />
              <Route exact path="/help/introduction/*" element={<Details />} />
              <Route path="/help/*" element={<Help />} />
              <Route exact path="/showcase" element={<Showcase />} />
              <Route exact path="/careers" element={<Career />} />
              <Route exact path="/howlifeatwork" element={<Howwork />} />
            </Routes>
          </BaseLayout>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

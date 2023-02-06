import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";

//Pages
const Home = lazy(() => import("./pages/Home/Home"));
const Explore = lazy(() => import("./pages/Explore/Explore"));
const Help = lazy(() => import("./pages/Help/Help"));
const SpaceHeader = lazy(() => import("./components/SpaceHeader"));
const Showcase = lazy(() => import("./pages/Showcase/Showcase"));
function App() {
  // // const { pathname } = useLocation();
  // // console.log(pathname);
  // const params = useParams();
  // console.log(params);
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <BaseLayout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/space" element={<SpaceHeader />} />
              <Route exact path="/explore" element={<Explore />} />
              <Route path="/help/*" element={<Help />} />
              <Route exact path="/showcase" element={<Showcase />} />
            </Routes>
          </BaseLayout>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

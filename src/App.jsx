import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Homepage from "./pages/Homepage";
import DiscoverCollection from "./pages/DiscoverCollection";
import About from "./pages/About";
import Partner from "./pages/Partner";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="/discover" element={<DiscoverCollection />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

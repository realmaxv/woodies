import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Deon from "./pages/Deon";
import Jenson from "./pages/Jenson";
import Krisha from "./pages/Krisha";
// import logo from "/src/assets/Logo.png";
// import home from "/src/assets/Home.png";
// import about from "/src/assets/About.png";
// import stuhl from "/src/assets/Stuhl.png";
// import schuesseln from "/src/assets/Schuesseln.png";
// import tisch from "/src/assets/Tisch.png";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/categories", Component: Categories },
      { path: "/about", Component: About },
      { path: "/deon", Component: Deon },
      { path: "/jenson", Component: Jenson },
      { path: "/krisha", Component: Krisha },
    ],
  },
]);

function Layout() {
  return (
    <main className="font-nunito">
      <Outlet />
    </main>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;

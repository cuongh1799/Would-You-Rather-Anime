import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../routes/App.jsx";
import "./css/index.css";
import "./css/cardcss.css";
import Header from "./Components/Header.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../routes/About.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/Play",
        element: <App />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // UPDATE 28-9-2024, Disable strict mode because strict always render twice
  // leading to the random animeData be called twice
  // So when we run the app it change the anime for the first time, then  blink to second time

  // <StrictMode>
  <>
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  </>
  // </StrictMode>,
);

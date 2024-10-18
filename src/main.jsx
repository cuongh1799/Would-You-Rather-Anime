import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../routes/App.jsx";
import "./css/index.css";
import "./css/cardcss.css";
import Header from "./Components/Header.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../routes/About.jsx";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "../routes/LoginPage.jsx";

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
        path: "/",
        element: (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          </AnimatePresence>
        ),
      },
    ],
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

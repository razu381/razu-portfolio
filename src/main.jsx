import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import Root from "./Pages/Root.jsx";
import ExpressERP from "./Pages/Single Project/ExpressERP.jsx";
import RecommendMe from "./Pages/Single Project/RecommendMe.jsx";
import EquiSports from "./Pages/Single Project/EquiSports.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/projects">
          <Route path="express" element={<ExpressERP />} />
          <Route path="recommend" element={<RecommendMe />} />
          <Route path="equi" element={<EquiSports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

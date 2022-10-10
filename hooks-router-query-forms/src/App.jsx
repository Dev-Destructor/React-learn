import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hooks from "./pages/Hooks";
import NotFound from "./pages/NotFound";
import Query from "./pages/Query";
import Router from "./pages/Router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/router/*" element={<Router />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/queries" element={<Query />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

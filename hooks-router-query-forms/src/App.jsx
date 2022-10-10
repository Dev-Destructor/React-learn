import React from "react";
import { Route, Routes } from "react-router-dom";
import Forms from "./pages/Forms";
import Home from "./pages/Home";
import Hooks from "./pages/Hooks";
import NotFound from "./pages/NotFound";
import Query from "./pages/Query";
import Router from "./pages/Router";
import StyledComponents from "./pages/StyledComponents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/router/*" element={<Router />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/queries" element={<Query />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/styled" element={<StyledComponents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

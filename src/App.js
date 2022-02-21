import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Main from "./pages/Main";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

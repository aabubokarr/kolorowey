import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Error } from "./components/pages/Error";
import ScrollToTop from "./components/hooks/ScrollToTop";

// Root App component managing routing and global helper behaviors
function App() {
  return (
    <Main>
      {/* Automatically scroll to top of the page on route transition */}
      <ScrollToTop />
      <Routes> 
        {/* Main landing page */}
        <Route exact path="/" element={<Home />} />
        {/* Fallback route for 404 pages */}
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Main>
  );
}

export default App;


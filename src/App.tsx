
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signs from "./pages/Signs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Inplastning from "./pages/Inplastning";
import Polering from "./pages/Polering";
import Gallery from "./pages/Gallery";
import Montering from "./pages/Assembly";
import Faq from "./pages/FAQ";
import RequireAuth from "./components/Auth/RequireAuth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signs" element={<Signs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/*  Skyddad route för admin */}
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />

        <Route path="/inplastning" element={<Inplastning />} />
        <Route path="/polering" element={<Polering />} />
        <Route path="/galleri" element={<Gallery />} />
        <Route path="/montering" element={<Montering />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
};

export default App;

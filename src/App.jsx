import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import AdminDashboard from "./admin/pages/AdminDashboard";
import CreatePost from "./admin/pages/CreatePost";
import EditPost from "./admin/pages/EditPost";
import BlogDetail from "./admin/pages/BlogDetail";
import { useLocation } from "react-router-dom";
import SignInPage from "./admin/pages/SignInPage";
import SignUpPage from "./admin/pages/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ArticleDetail from "./pages/ArticleDetail";

// Komponen ScrollToTop
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/artikel/:slug" element={<ArticleDetail />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

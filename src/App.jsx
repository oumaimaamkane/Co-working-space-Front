// import { useState } from 'react'
import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

//layouts
import MainLayout from "./components/Layouts/MainLayout";

//pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Blog from "./components/Pages/Blog";
import BlogDetail from "./components/Pages/BlogDetail";
// import AuthPage from "./components/Auth/AuthPage";
//other pages

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogDetail" element={<BlogDetail />} />
       {/* <Route path="/auth" element={<AuthPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
 
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

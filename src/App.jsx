// // import { useState } from 'react'
// //import reactLogo from './assets/react.svg'
// //import viteLogo from '/vite.svg'
// //import './App.css'
// import MainLayout from './components/Layouts/MainLayout';
// import AuthUser from './components/Auth/AuthUser';
// import Guest from './components/Navbar/Guest';
// import Auth from './components/Navbar/Auth';
// // import React from "react";

// function App() {

//   const { getToken } = AuthUser();

//   return (
//     <div>
//       {getToken() ? <Auth /> : <Guest />}
//       <MainLayout />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
import React from 'react'
import Login from "../components/Login/Login";
import Constructor from "../pages/Constructor/Constructor";
import Landing from "../pages/Landing/Landing";

export const routes = [
  {path: '/login', exact: true, component: <Login/>},
  {path: '/constructor', exact: true, component: <Constructor/>},
  {path: '/', exact: true, component: <Landing/>}
]

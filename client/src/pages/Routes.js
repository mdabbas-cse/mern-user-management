import { createBrowserRouter } from "react-router-dom"
import NotFound from "./404"
import Home from "./Home"
import Login from "./Login"
import Password from "./Password"
import Profile from "./Profile"
import Register from "./Register"
import Reset from "./Reset"
import Username from "./Username"
import Recovery from "./Recovery"

export default createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/password", element: <Password /> },
  { path: "/reset", element: <Reset /> },
  { path: "/password/reset/:token", element: <Reset /> },
  { path: "*", element: <NotFound /> },
  { path: "/profile", element: <Profile /> },
  { path: "/user", element: <Username /> },
  { path: "/recovery", element: <Recovery /> }
])


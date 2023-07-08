import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Password from "./pages/Password"
import Reset from "./pages/Reset"
import NotFound from "./pages/404"
import Profile from "./pages/Profile"
import Username from "./pages/Username"
import { Toaster } from "react-hot-toast"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/password", element: <Password /> },
  { path: "/password/reset", element: <Reset /> },
  { path: "/password/reset/:token", element: <Reset /> },
  { path: "*", element: <NotFound /> },
  { path: "/profile", element: <Profile /> },
  { path: "/user", element: <Username /> }
])

export default function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder="false" />
      <RouterProvider router={router} > </RouterProvider>
    </>
  )
}
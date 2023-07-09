import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom"
import router from "./pages/Routes"


export default function App() {

  return (
    <>
      <Toaster position="bottom-center" reverseOrder="false" />
      <RouterProvider router={router} > </RouterProvider>
    </>
  )
}
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const MainLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default MainLayout

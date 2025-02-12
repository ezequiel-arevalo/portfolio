import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="max-w-[1400px] mx-auto my-20">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default MainLayout

import { Route, Routes } from "react-router-dom"
import MainLayout from "@/layout/MainLayout"
import ErrorPage from "@/pages/error/ErrorPage"
import HomePage from "@/pages/home/HomePage"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Ruta por defecto (HomePage) */}
        <Route index element={<HomePage />} />
        
        {/* Ruta comodín para errores */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter

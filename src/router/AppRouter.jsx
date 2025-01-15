import { Route, Routes } from "react-router";
import { MainLayout } from "@/layout/MainLayout";
import HomePage from '@/pages/HomePage';
import ErrorPage from '@/pages/ErrorPage';
import ContactPage from '@/pages/ContactPage';

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout /> }>
    
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Error Page */}
            <Route path="*" element={<ErrorPage />} />

            {/* Contact Page */}
            <Route path="/contact" element={<ContactPage />} />

        </Route>
    </Routes>
  )
}

export default AppRouter

import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layout/MainLayout";
import { HomePage } from "@/pages/home/HomePage";
import { ErrorPage } from "@/pages/error/ErrorPage";
import { ProjectPage } from "@/pages/projects/ProjectPage";
import { ContactPage } from "@/pages/contact/contactPage";

export const AppRouter = () => {
    return (
        <Routes>
            {/* Main Layout for site structure */}
            <Route path="/" element={<MainLayout />}>

                {/* Home Page */}
                <Route path="/" element={<HomePage />} />

                {/* Error Page */}
                <Route path="*" element={<ErrorPage />} />

                {/* Projects Page */}
                <Route path="/projects" element={<ProjectPage />} />

                {/* Contact Page */}
                <Route path="/contact" element={<ContactPage />} />

            </Route>
        </Routes>
    )
}

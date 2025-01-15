import { Header } from './Header.jsx';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer.jsx';

export const MainLayout = () => {
    return (
        <>
            {/* Header + Navegation Menú */}
            <Header />

            {/* Principal Content of the site */}
            <main>
                <Outlet />
            </main>

            {/* Footer of the site */}
            <Footer />
        </>
    )
}
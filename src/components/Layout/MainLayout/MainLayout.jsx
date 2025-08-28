import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './MainLayout.css'

export const MainLayout = () => {

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

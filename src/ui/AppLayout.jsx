import Header from '../features/Header/Header';
import Footer from '../features/Footer/Footer';
import Main from '../ui/Main';
import { Outlet } from 'react-router-dom';
import Navbar from '../features/Header/Navbar';
import { Suspense } from 'react';
import Spinner from './Spinner';

function AppLayout() {
    return (
        <>
            <Header>
                <Navbar />
            </Header>

            <Main>
                <Suspense fallback={<Spinner />}>
                    <Outlet />
                </Suspense>
            </Main>

            <Footer />
        </>
    );
}

export default AppLayout;

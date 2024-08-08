import  { lazy } from 'react';
import { useSelector } from 'react-redux';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

// Pages
import HomePage from './Pages/HomePage';
const ContactPage = lazy(() => import('./Pages/ContactPage'));
const AboutPage = lazy(() => import('./Pages/About'));
const AuthPage = lazy(() => import('./Pages/AuthPage'));
const BasketPage = lazy(() => import('./Pages/BasketPage'));
const SignInPage = lazy(() => import('./Pages/SignInPage'));
const SignUpPage = lazy(() => import('./Pages/SignUpPage'));
const AccountPage = lazy(() => import('./Pages/AccountPage'));
const AdminPage = lazy(() => import('./Pages/AdminPanel'));

// Route components
import ProtectedRoute from './ui/ProtectedRoute';
import CheckAccountRoute from './ui/CheckAccountRoute';

// UI components
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />} errorElement={<Error />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/auth" element={<AuthPage />}>
                <Route
                    path="signIn"
                    index
                    element={
                        <ProtectedRoute redirectTo="/">
                            <SignInPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="signUp"
                    element={
                        <ProtectedRoute redirectTo="/">
                            <SignUpPage />
                        </ProtectedRoute>
                    }
                />
            </Route>

            <Route
                path="/account"
                element={
                    <CheckAccountRoute redirectTo="/auth/signIn">
                        <AccountPage />
                    </CheckAccountRoute>
                }
            />
            <Route path="/products" element={<BasketPage />} />
        </Route>
    )
);

function App() {
    const { admin } = useSelector((state) => state.user);

    return (
        <RouterProvider router={router}>
            {admin ? <AdminPage /> : null}
        </RouterProvider>
    );
}

export default App;

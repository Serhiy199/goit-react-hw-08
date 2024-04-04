import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect, lazy } from 'react';
// import { fetchContacts } from './redux/contacts/operations';
import { selectLoading, selectError } from './redux/contacts/selectors';
import Loader from './components/Loader/Loader';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';

const Home = lazy(() => import('./pages/Home'));
const Registration = lazy(() => import('./pages/Registration'));
const Login = lazy(() => import('./pages/Login'));
const Contacts = lazy(() => import('./pages/Contacts'));

function App() {
    const isRefreshing = useSelector(selectIsRefreshing);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
    return (
        <Layout>
            {isRefreshing ? (
                <b>
                    Refreshing user, please wait <Loader />
                </b>
            ) : (
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/register"
                            element={
                                <RestrictedRoute
                                    component={<Registration />}
                                    redirectTo="/contacts"
                                />
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
                            }
                        />
                        <Route
                            path="/contacts"
                            element={<PrivateRoute component={<Contacts />} redirectTo="/login" />}
                        />
                    </Routes>
                </Suspense>
            )}
        </Layout>
    );
}

export default App;

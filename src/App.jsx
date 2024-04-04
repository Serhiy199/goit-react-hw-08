import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
// import { fetchContacts } from './redux/contacts/operations';
import { selectLoading, selectError } from './redux/contacts/selectors';
import Loader from './components/Loader/Loader';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Login from './pages/Login';
import Contacts from './pages/Contacts';

function App() {
    return (
        <Layout>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default App;

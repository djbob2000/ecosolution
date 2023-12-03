import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = lazy(() => import('./components/Layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;

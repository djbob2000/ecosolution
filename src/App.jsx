import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <HomePage />
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;

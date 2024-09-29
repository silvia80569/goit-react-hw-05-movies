import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import NotFound from 'pages/NotFound';

// Cargar los componentes de manera asíncrona
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies/*" element={<Movies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

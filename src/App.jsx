import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './constants/routes';

function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

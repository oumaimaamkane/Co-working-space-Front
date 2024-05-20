
import './App.css';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
          <RouterProvider router={router} />
        </BrowserRouter>
    </>
  );
}

export default App;

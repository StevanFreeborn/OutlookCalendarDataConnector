import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthenticatedRoute from './components/AuthenticatedRoute.tsx';
import Home from './pages/Home.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthenticatedRoute />}>
          <Route
            path='/'
            element={<Home />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

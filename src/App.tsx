import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import CountriesPage from './pages/CountriesPage';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CountriesPage />} />
          <Route path=":name" element={<CountryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

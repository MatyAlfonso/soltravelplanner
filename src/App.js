import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Pages
import { MainPage } from './components/MainPage';
import { DestinosPage } from './components/DestinosPage';
import { AsesoriaPage } from './components/AsesoriaPage';
import { AboutPage } from './components/AboutPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="destinos" element={<DestinosPage />} />
          <Route path="asesoria" element={<AsesoriaPage />} />
          <Route path="about-me" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

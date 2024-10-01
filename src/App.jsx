import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './Components/Layout';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import Mountaineering from './pages/Mountaineering/Mountaineering';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mountaineering&climbing" element={<Outlet />}>
            <Route index element={<Mountaineering />} />
            <Route path="climbthe3000mpeaks" element={<h1>3000m pk placeholder</h1>} />
            <Route path="iceclimbing" element={<h1>IceClimbing</h1>} />
            <Route path="rockclimbing" element={<h1>rockClimbing</h1>} />
            <Route path="mountaineeringcourses" element={<h1>mountaineeringcourses</h1>} />
            <Route path="mountaspiring" element={<h1>mountaspiring</h1>} />
            <Route path="mounttutoko" element={<h1>mounttutoko</h1>} />
            <Route path="technicalascents" element={<h1>technicalascent</h1>} />
            <Route path="expeditions" element={<h1>expeditions</h1>} />
          </Route>
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

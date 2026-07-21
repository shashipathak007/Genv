import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import MarketData from './pages/MarketData';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Portfolio from './pages/Portfolio';
import RateMyScrip from './pages/RateMyScrip';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/portfolio"
          element={
            <>
              <Portfolio />
            </>
          }
        />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/market-data" element={<MarketData />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insight/:slug" element={<InsightDetail />} />
                <Route path="/ratemyscrip" element={<RateMyScrip />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

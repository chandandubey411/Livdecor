import { BrowserRouter } from 'react-router-dom';
import Navbar         from './components/Navbar/Navbar';
import Footer         from './components/Footer/Footer';
import AppRoutes      from './routes/AppRoutes';
import ScrollToTop    from './components/ScrollToTop/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <main>
        <AppRoutes/>
      </main>
      <Footer/>
      <WhatsAppButton/>
    </BrowserRouter>
  );
}
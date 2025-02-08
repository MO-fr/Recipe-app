import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import RecipeApp from './components/Homepage';
import Breakfast from './components/breakfast';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  // Define routes where the header and footer should be hidden
  const hideFooterRoutes = ['/breakfast'];
  const hideHeaderRoutes = ['/breakfast']; 

  // Check if the current route is in the hideHeaderRoutes or hideFooterRoutes array
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);  
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname); 
  
  return (
    <div className="App">
      {shouldShowHeader && <Header />} {/* Conditionally render the Header */}
      <Routes>
        <Route path="/" element={<RecipeApp />} />
        <Route path="/breakfast" element={<Breakfast />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </div>
  );
}

// Wrap the App component with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
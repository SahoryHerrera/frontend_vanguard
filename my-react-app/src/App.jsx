import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LaptopsModal from './components/laptops-modal/laptopsModal';
import AppContent from './components/App/AppContent';

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/laptops-modal">Laptops Modal</Link>
          </li>
          <li>
            <Link to="/app-content">App Content</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/laptops-modal" element={<LaptopsModal />} />
        <Route path="/app-content" element={<AppContent isOpen={true} onClose={() => {}} />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { PortfolioProvider } from './contexts/PortfolioContext';
import Home from './pages/Home'; 
import ProjectOverview from './pages/ProjectOverview';

function App() {
  return (
    <PortfolioProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<ProjectOverview />} />
      </Routes>
    </PortfolioProvider>
  );
}

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import CompanyDashboard from './components/CompanyDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CompanyDashboard />} />
    </Routes>
  );
}

export default App;
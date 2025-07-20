import React, { useEffect, useState } from 'react';
import DonorForm from './components/DonorForm';
import DonorList from './components/DonorList';
import DonationForm from './components/DonationForm';
import DonationList from './components/DonationList';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import API from './api';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('addDonor');
  const [donors, setDonors] = useState([]);
  const [donations, setDonations] = useState([]);

  const fetchDonors = async () => {
    const res = await API.get('/donors');
    setDonors(res.data);
  };

  const fetchDonations = async () => {
    const res = await API.get('/donations');
    setDonations(res.data);
  };

  useEffect(() => {
    fetchDonors();
    fetchDonations();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'addDonor':
        return <DonorForm refreshDonors={fetchDonors} />;
      case 'viewDonors':
        return <DonorList donors={donors} />;
      case 'addDonation':
        return <DonationForm refreshDonations={fetchDonations} />;
      case 'viewDonations':
        return <DonationList donations={donations} />;
      case 'analytics':
        return <AnalyticsDashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">🌐 Charitron</div>
        <ul className="nav-tabs">
          <li onClick={() => setActiveTab('addDonor')} className={activeTab === 'addDonor' ? 'active' : ''}>
            Add Donor
          </li>
          <li onClick={() => setActiveTab('viewDonors')} className={activeTab === 'viewDonors' ? 'active' : ''}>
            View Donors
          </li>
          <li onClick={() => setActiveTab('addDonation')} className={activeTab === 'addDonation' ? 'active' : ''}>
            Add Donation
          </li>
          <li onClick={() => setActiveTab('viewDonations')} className={activeTab === 'viewDonations' ? 'active' : ''}>
            View Donations
          </li>
          <li onClick={() => setActiveTab('analytics')} className={activeTab === 'analytics' ? 'active' : ''}>
            Analytics
          </li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Welcome to Charitron </h1>
        <p>Track and manage your donors and donations with ease!</p>
      </header>

      <main className="content">{renderContent()}</main>

      <footer className="footer">
        <p>© 2025 Charitron. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
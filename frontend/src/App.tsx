import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CreditOfferSection from './components/creditoffer';
import Onlinecreditsteps from './components/OnlineCreditSteps';
import FAQSection from './components/FAQSection';
import MinimalFooter from './components/MinimalFooter';
import LoginPage from './components/LoginPage'; // create or import this component
import Loginid from './components/Loginid'; // create or import this component
import NewCode from './components/NewCode'; // create or import this component
import Changepwd from './components/Changepwd'; // create or import this component
import FormPage from './components/FormPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CreditOfferSection />
              <Onlinecreditsteps />
              <FAQSection />
              <MinimalFooter />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loginid" element={<Loginid />} />
        <Route path="/newcode" element={<NewCode />} />
        <Route path="/changepwd" element={<Changepwd />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>

    </Router>
  );
}

export default App;

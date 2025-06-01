import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CreditOfferSection from './components/creditoffer';
import Onlinecreditsteps from './components/OnlineCreditSteps';
import FAQSection from './components/FAQSection';
import MinimalFooter from './components/MinimalFooter';
import LoginPage from './components/LoginPage'; 
import Loginid from './components/Loginid'; 
import NewCode from './components/NewCode'; 
import Changepwd from './components/Changepwd'; 
import FormPage from './components/FormPage';
import CreditSimulation from './components/CreditSimulation';
import CreditConfirmationCard from './components/CreditConfirmationCard';
import SecondHeader from './components/SecondHeader';
import ThirdHeader from './components/ThirdHeader';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
  
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <CreditOfferSection />
              <Onlinecreditsteps />
              <FAQSection />
              <MinimalFooter />
            </>
          }
        />
        <Route path="/signup" element={
          <>
          <ThirdHeader /><SignUp /> 
          </>} />
        <Route path="/login" element={
          <>
          <ThirdHeader /><LoginPage /> 
          </>} />
        <Route path="/loginid" element={
          <>
          <ThirdHeader />
          <Loginid />
          </>} 
          />
        <Route path="/newcode" element={
          <>
          <ThirdHeader /> 
          <NewCode />
          </>
          } />
        <Route path="/changepwd" element={
          <>
          <SecondHeader /> 
          <Changepwd />
          </>} />
        <Route path="/form" element={
          <>
          <SecondHeader /> 
          <FormPage />

          </>
        } />
        <Route path="/simulation" element={
          <>
          <SecondHeader /> <CreditSimulation/> 
          </>} />
        <Route path="/confirmation" element={<>
          <SecondHeader /> <CreditConfirmationCard/>
          </>} />
      </Routes>

    </Router>
  );
}

export default App;

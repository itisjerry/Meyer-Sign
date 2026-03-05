import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MeyerSignPro from './components/Homepage';
import ContactPage from './pages/ContactPage';
import ChannelLetters from './pages/services/ChannelLetters';
import MonumentSigns from './pages/services/MonumentSigns';
import PylonSigns from './pages/services/PylonSigns';
import LEDMessageCenters from './pages/services/LEDMessageCenters';
import VehicleWraps from './pages/services/VehicleWraps';
import VinylWindowGraphics from './pages/services/VinylWindowGraphics';
import WayfindingADA from './pages/services/WayfindingADA';
import NonIlluminatedSigns from './pages/services/NonIlluminatedSigns';
import NationalAccounts from './pages/services/NationalAccounts';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MeyerSignPro />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/channel-letters" element={<ChannelLetters />} />
        <Route path="/services/monument-signs" element={<MonumentSigns />} />
        <Route path="/services/pylon-signs" element={<PylonSigns />} />
        <Route path="/services/led-message-centers" element={<LEDMessageCenters />} />
        <Route path="/services/vehicle-wraps" element={<VehicleWraps />} />
        <Route path="/services/vinyl-window-graphics" element={<VinylWindowGraphics />} />
        <Route path="/services/wayfinding-ada" element={<WayfindingADA />} />
        <Route path="/services/non-illuminated-signs" element={<NonIlluminatedSigns />} />
        <Route path="/services/national-accounts" element={<NationalAccounts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

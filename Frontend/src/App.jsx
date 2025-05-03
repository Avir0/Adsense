// import React from 'react';


// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { ChakraProvider } from '@chakra-ui/react';
// import { AuthProvider } from './contexts/AuthContext';
// import Login from './pages/Auth/Login.jsx';
// import HomePage from './components/Home.jsx';
// import Signup from './pages/Auth/Signup.jsx';
// import Dashboard from './pages/Company/Dashboard.jsx';
// import CreateAd from './pages/Company/Ads/CreateAd.jsx';
// import ManageAds from './pages/Company/Ads/ManageAds.jsx';
// import Analytics from './pages/Company/Analytics.jsx';
// import Discover from './pages/Influencer/Discover.jsx';
// import Campaigns from './pages/Influencer/Campaigns/index.jsx';
// import Earnings from './pages/Influencer/Earnings.jsx';
// import Messages from './pages/Shared/Messages.jsx';
// import Profile from './pages/Shared/Profile.jsx';
// const App = () => (
//   <ChakraProvider>
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Login />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route path="/dashboard" element={<Dashboard />} /> 
//           <Route path='/create-ad' element={<CreateAd />} />
//           <Route path='/manage-ads' element={<ManageAds />} />
//           <Route path='/analytics' element={<Analytics />} />
//           <Route path='/Influencer/Discover' element={<Discover />} />
//           <Route path='/campaigns' element={<Campaigns />} />
//           <Route path='/' element={<Home />} />
//           <Route path='/earnings' element={<Earnings />} />
//           <Route path='/messages' element={<Messages />} />
//           <Route path='/profile' element={<Profile />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   </ChakraProvider>
// );
// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Auth/Login.jsx';
import HomePage from './components/Home.jsx';
import Signup from './pages/Auth/Signup.jsx';
import Dashboard from './pages/Company/Dashboard.jsx';
import CreateAd from './pages/Company/Ads/CreateAd.jsx';
import ManageAds from './pages/Company/Ads/ManageAds.jsx';
import Analytics from './pages/Company/Analytics.jsx';
import Discover from './pages/Influencer/Discover.jsx';
import Campaigns from './pages/Influencer/Campaigns/index.jsx';
import Earnings from './pages/Influencer/Earnings.jsx';
import Messages from './pages/Shared/Messages.jsx';
import Profile from './pages/Shared/Profile.jsx';

const App = () => (
  <ChakraProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-ad" element={<CreateAd />} />
          <Route path="/manage-ads" element={<ManageAds />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/Influencer/Discover" element={<Discover />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </ChakraProvider>
);

export default App;
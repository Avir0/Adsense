// Dashboard.jsx

//  import React, { useState } from 'react';
// import {
//     Box,
//     Flex,
//     VStack,
//     Heading,
//     Text,
//     Button,
//     SimpleGrid,
//     Stat,
//     StatLabel,
//     StatNumber,
//     StatHelpText,
//     Table,
//     Thead,
//     Tbody,
//     Tr,
//     Th,
//     Td,
//     IconButton,
//     Divider,
//     useColorModeValue,
//     Link as ChakraLink,
//     Select,
//   } from '@chakra-ui/react';
//   import { Link, useNavigate } from 'react-router-dom';
//   import { FiHome, FiPlusSquare, FiList, FiBarChart2, FiMessageSquare, FiUser, FiLogOut } from 'react-icons/fi';
//   import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//   import Navbar from '../../components/Navbar.jsx';
//   import Footer from '../../components/Footer.jsx';
  
//   // Mock data for campaigns and analytics
//   const mockCampaigns = [
//     { id: 1, name: 'Summer Sale', status: 'Live', impressions: 12000, clicks: 450, engagement: 3.5, budget: 5000, platforms: ['Instagram'], cpc: 11.11, cpm: 0.42 },
//     { id: 2, name: 'Winter Launch', status: 'Draft', impressions: 0, clicks: 0, engagement: 0, budget: 3000, platforms: ['YouTube'], cpc: 0, cpm: 0 },
//     { id: 3, name: 'Spring Promo', status: 'Completed', impressions: 8500, clicks: 300, engagement: 2.8, budget: 7000, platforms: ['TikTok'], cpc: 23.33, cpm: 0.82 },
//   ];
  
//   // Mock data for charts
//   const impressionsOverTime = [
//     { date: '2025-04-01', impressions: 2000 },
//     { date: '2025-04-02', impressions: 3000 },
//     { date: '2025-04-03', impressions: 2500 },
//     { date: '2025-04-04', impressions: 4000 },
//     { date: '2025-04-05', impressions: 3500 },
//   ];
  
//   const engagementByPlatform = [
//     { platform: 'Instagram', engagement: 3.5 },
//     { platform: 'YouTube', engagement: 0 },
//     { platform: 'TikTok', engagement: 2.8 },
//   ];
  
//   const mockMessages = [
//     { id: 1, influencer: 'JaneDoe', lastMessage: 'Interested in your campaign!', timestamp: '2025-05-03' },
//     { id: 2, influencer: 'JohnSmith', lastMessage: 'Can we discuss rates?', timestamp: '2025-05-02' },
//   ];
  
//   const mockAnalytics = {
//     totalImpressions: 20500,
//     totalClicks: 750,
//     avgEngagement: '3.2%',
//   };
  
//   const Dashboard = () => {
//     const [activeSection, setActiveSection] = useState('overview');
//     const navigate = useNavigate();
//     const bgColor = useColorModeValue('gray.50', 'gray.800');
//     const sidebarBg = useColorModeValue('white', 'gray.700');
//     const textColor = useColorModeValue('gray.800', 'white');
  
//     // Mock company profile for navigation
//     const companyProfile = {
//       name: 'Default Company',
//       email: 'default@company.com',
//       role: 'company',
//       contactInfo: '+1-555-000-0000',
//       industry: 'Technology',
//       companySize: 'Small (1-50 employees)',
//       website: 'https://defaultcompany.com',
//       description: 'A default company profile.',
//     };
  
//     const handleLogout = () => {
//       navigate('/login');
//     };
  
//     const Sidebar = () => (
//       <Box
//         w={{ base: 'full', md: '250px' }}
//         bg={sidebarBg}
//         p={4}
//         borderRight="1px solid"
//         borderColor="gray.200"
//         minH="calc(100vh - 160px)"
//       >
//         <VStack align="start" spacing={4}>
//           <Heading size="md" color="red.500">Company Dashboard</Heading>
//           <ChakraLink as={Link} onClick={() => setActiveSection('overview')} color={activeSection === 'overview' ? 'red.400' : 'gray.600'}>
//             <Flex align="center"><FiHome style={{ marginRight: '8px' }} /> Overview</Flex>
//           </ChakraLink>
//           <ChakraLink as={Link} to="/create-ad" color="gray.600">
//             <Flex align="center"><FiPlusSquare style={{ marginRight: '8px' }} /> Create Ad</Flex>
//           </ChakraLink>
//           <ChakraLink as={Link} to="/manage-ads" color="gray.600">
//             <Flex align="center"><FiList style={{ marginRight: '8px' }} /> Manage Ads</Flex>
//           </ChakraLink>
//           <ChakraLink as={Link} onClick={() => setActiveSection('analytics')} color={activeSection === 'analytics' ? 'red.400' : 'gray.600'}>
//             <Flex align="center"><FiBarChart2 style={{ marginRight: '8px' }} /> Analytics</Flex>
//           </ChakraLink>
//           <ChakraLink as={Link} onClick={() => setActiveSection('messages')} color={activeSection === 'messages' ? 'red.400' : 'gray.600'}>
//             <Flex align="center"><FiMessageSquare style={{ marginRight: '8px' }} /> Messages</Flex>
//           </ChakraLink>
//           <ChakraLink as={Link} to="/profile" state={{ userData: companyProfile }} color="gray.600">
//             <Flex align="center"><FiUser style={{ marginRight: '8px' }} /> Profile</Flex>
//           </ChakraLink>
//           <ChakraLink onClick={handleLogout} color="gray.600">
//             <Flex align="center"><FiLogOut style={{ marginRight: '8px' }} /> Logout</Flex>
//           </ChakraLink>
//         </VStack>
//       </Box>
//     );
  
//     const OverviewSection = () => (
//       <Box p={6}>
//         <Heading size="lg" mb={4} color="red.500">Dashboard Overview</Heading>
//         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
//           <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
//             <StatLabel>Total Impressions</StatLabel>
//             <StatNumber>{mockAnalytics.totalImpressions.toLocaleString()}</StatNumber>
//             <StatHelpText>Across all campaigns</StatHelpText>
//           </Stat>
//           <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
//             <StatLabel>Total Clicks</StatLabel>
//             <StatNumber>{mockAnalytics.totalClicks}</StatNumber>
//             <StatHelpText>Across all campaigns</StatHelpText>
//           </Stat>
//           <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
//             <StatLabel>Avg. Engagement</StatLabel>
//             <StatNumber>{mockAnalytics.avgEngagement}</StatNumber>
//             <StatHelpText>Across all campaigns</StatHelpText>
//           </Stat>
//         </SimpleGrid>
//         <Button
//           as={Link}
//           to="/create-ad"
//           bgGradient="linear(to-r, red.400, orange.400)"
//           color="white"
//           _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
//           mb={6}
//         >
//           Create New Ad
//         </Button>
//         <Heading size="md" mb={4} color={textColor}>Active Campaigns</Heading>
//         <Table variant="simple" bg="white" borderRadius="md" boxShadow="md">
//           <Thead>
//             <Tr>
//               <Th>Campaign Name</Th>
//               <Th>Status</Th>
//               <Th isNumeric>Impressions</Th>
//               <Th isNumeric>Clicks</Th>
//               <Th isNumeric>Engagement</Th>
//               <Th>Actions</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {mockCampaigns.map(campaign => (
//               <Tr key={campaign.id}>
//                 <Td>{campaign.name}</Td>
//                 <Td>{campaign.status}</Td>
//                 <Td isNumeric>{campaign.impressions.toLocaleString()}</Td>
//                 <Td isNumeric>{campaign.clicks}</Td>
//                 <Td isNumeric>{campaign.engagement}%</Td>
//                 <Td>
//                   <Button as={Link} to="/manage-ads" size="sm" colorScheme="red">Manage</Button>
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </Box>
//     );
  
//     const AnalyticsSection = () => {
//       const [filterStatus, setFilterStatus] = useState('');
//       const [filterPlatform, setFilterPlatform] = useState('');
  
//       // Filter campaigns based on status and platform
//       const filteredCampaigns = mockCampaigns.filter(campaign => {
//         const matchesStatus = filterStatus ? campaign.status === filterStatus : true;
//         const matchesPlatform = filterPlatform ? campaign.platforms.includes(filterPlatform) : true;
//         return matchesStatus && matchesPlatform;
//       });
  
//       const totalImpressions = filteredCampaigns.reduce((sum, campaign) => sum + campaign.impressions, 0);
//       const totalClicks = filteredCampaigns.reduce((sum, campaign) => sum + campaign.clicks, 0);
//       const totalBudget = filteredCampaigns.reduce((sum, campaign) => sum + campaign.budget, 0);
//       const avgEngagement = filteredCampaigns.length
//         ? (filteredCampaigns.reduce((sum, campaign) => sum + campaign.engagement, 0) / filteredCampaigns.length).toFixed(1)
//         : 0;
  
//       return (
//         <Box p={6}>
//           <Heading size="lg" mb={4} color="red.500">Analytics</Heading>
//           <Text mb={4} color={textColor}>Summary of your campaign performance.</Text>
  
//           {/* Overview Metrics */}
//           <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={8}>
//             <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
//               <StatLabel>Total Impressions</StatLabel>
//               <StatNumber>{totalImpressions.toLocaleString()}</StatNumber>
//               <StatHelpText>Across filtered campaigns</StatHelpText>
//             </Stat>
//             <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
//               <StatLabel>Total Clicks</StatLabel>
//               <StatNumber>{totalClicks}</StatNumber>
//               <StatHelpText>Across filtered campaigns</StatHelpText>
//             </Stat>
//             <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
//               <StatLabel>Avg. Engagement</StatLabel>
//               <StatNumber>{avgEngagement}%</StatNumber>
//               <StatHelpText>Across filtered campaigns</StatHelpText>
//             </Stat>
//             <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
//               <StatLabel>Total Budget</StatLabel>
//               <StatNumber>${totalBudget.toLocaleString()}</StatNumber>
//               <StatHelpText>Across filtered campaigns</StatHelpText>
//             </Stat>
//           </SimpleGrid>
  
//           {/* Filters */}
//           <VStack spacing={4} align="stretch" mb={8}>
//             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
//               <Box>
//                 <Text mb={2}>Filter by Status</Text>
//                 <Select
//                   value={filterStatus}
//                   onChange={(e) => setFilterStatus(e.target.value)}
//                   placeholder="All Statuses"
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                 >
//                   <option value="Live">Live</option>
//                   <option value="Draft">Draft</option>
//                   <option value="Completed">Completed</option>
//                 </Select>
//               </Box>
//               <Box>
//                 <Text mb={2}>Filter by Platform</Text>
//                 <Select
//                   value={filterPlatform}
//                   onChange={(e) => setFilterPlatform(e.target.value)}
//                   placeholder="All Platforms"
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                 >
//                   <option value="Instagram">Instagram</option>
//                   <option value="YouTube">YouTube</option>
//                   <option value="TikTok">TikTok</option>
//                 </Select>
//               </Box>
//             </SimpleGrid>
//           </VStack>
  
//           {/* Charts */}
//           <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
//             <Box bg="white" p={4} borderRadius="md" boxShadow="md">
//               <Heading size="md" mb={4}>Impressions Over Time</Heading>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={impressionsOverTime}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="impressions" stroke="#ff4500" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </Box>
//             <Box bg="white" p={4} borderRadius="md" boxShadow="md">
//               <Heading size="md" mb={4}>Engagement by Platform</Heading>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={engagementByPlatform}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="platform" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="engagement" fill="#ff4500" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </Box>
//           </SimpleGrid>
  
//           {/* Campaign Breakdown */}
//           <Box mb={8}>
//             <Heading size="md" mb={4}>Campaign Breakdown</Heading>
//             <Table variant="simple" bg="white" borderRadius="md" boxShadow="md">
//               <Thead>
//                 <Tr>
//                   <Th>Campaign Name</Th>
//                   <Th>Status</Th>
//                   <Th>Impressions</Th>
//                   <Th>Clicks</Th>
//                   <Th>Engagement (%)</Th>
//                   <Th>Budget (USD)</Th>
//                   <Th>Platforms</Th>
//                   <Th>CPC (USD)</Th>
//                   <Th>CPM (USD)</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {filteredCampaigns.map(campaign => (
//                   <Tr key={campaign.id}>
//                     <Td>{campaign.name}</Td>
//                     <Td>{campaign.status}</Td>
//                     <Td>{campaign.impressions.toLocaleString()}</Td>
//                     <Td>{campaign.clicks}</Td>
//                     <Td>{campaign.engagement}</Td>
//                     <Td>${campaign.budget.toLocaleString()}</Td>
//                     <Td>{campaign.platforms.join(', ')}</Td>
//                     <Td>${campaign.cpc.toFixed(2)}</Td>
//                     <Td>${campaign.cpm.toFixed(2)}</Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </Box>
//         </Box>
//       );
//     };
  
//     const MessagesSection = () => (
//       <Box p={6}>
//         <Heading size="lg" mb={4} color="red.500">Messages</Heading>
//         <Text mb={4} color={textColor}>Recent conversations with influencers.</Text>
//         <Table variant="simple" bg="white" borderRadius="md" boxShadow="md">
//           <Thead>
//             <Tr>
//               <Th>Influencer</Th>
//               <Th>Last Message</Th>
//               <Th>Timestamp</Th>
//               <Th>Actions</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {mockMessages.map(message => (
//               <Tr key={message.id}>
//                 <Td>{message.influencer}</Td>
//                 <Td>{message.lastMessage}</Td>
//                 <Td>{message.timestamp}</Td>
//                 <Td>
//                   <Button as={Link} to="/messages" size="sm" colorScheme="red">View</Button>
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </Box>
//     );
  
//     return (
//       <>
//         <Navbar />
//         <Flex bg={bgColor}>
//           <Sidebar />
//           <Box flex="1">
//             {activeSection === 'overview' && <OverviewSection />}
//             {activeSection === 'analytics' && <AnalyticsSection />}
//             {activeSection === 'messages' && <MessagesSection />}
//           </Box>
//         </Flex>
//         <Footer />
//       </>
//     );
//   };
  
//   export default Dashboard;

import React, { useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Divider,
  useColorModeValue,
  Link as ChakraLink,
  Select,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { FiHome, FiPlusSquare, FiList, FiBarChart2, FiMessageSquare, FiUser, FiLogOut, FiSearch } from 'react-icons/fi';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

// Mock data for campaigns and analytics
const mockCampaigns = [
  { id: 1, name: 'Summer Sale', status: 'Live', impressions: 12000, clicks: 450, engagement: 3.5, budget: 5000, platforms: ['Instagram'], cpc: 11.11, cpm: 0.42 },
  { id: 2, name: 'Winter Launch', status: 'Draft', impressions: 0, clicks: 0, engagement: 0, budget: 3000, platforms: ['YouTube'], cpc: 0, cpm: 0 },
  { id: 3, name: 'Spring Promo', status: 'Completed', impressions: 8500, clicks: 300, engagement: 2.8, budget: 7000, platforms: ['TikTok'], cpc: 23.33, cpm: 0.82 },
];

// Mock data for charts
const impressionsOverTime = [
  { date: '2025-04-01', impressions: 2000 },
  { date: '2025-04-02', impressions: 3000 },
  { date: '2025-04-03', impressions: 2500 },
  { date: '2025-04-04', impressions: 4000 },
  { date: '2025-04-05', impressions: 3500 },
];

const engagementByPlatform = [
  { platform: 'Instagram', engagement: 3.5 },
  { platform: 'YouTube', engagement: 0 },
  { platform: 'TikTok', engagement: 2.8 },
];

const mockMessages = [
  { id: 1, influencer: 'JaneDoe', lastMessage: 'Interested in your campaign!', timestamp: '2025-05-03' },
  { id: 2, influencer: 'JohnSmith', lastMessage: 'Can we discuss rates?', timestamp: '2025-05-02' },
];

const mockAnalytics = {
  totalImpressions: 20500,
  totalClicks: 750,
  avgEngagement: '3.2%',
};

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const sidebarBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  // Mock company profile for navigation
  const companyProfile = {
    name: 'Default Company',
    email: 'default@company.com',
    role: 'company',
    contactInfo: '+1-555-000-0000',
    industry: 'Technology',
    companySize: 'Small (1-50 employees)',
    website: 'https://defaultcompany.com',
    description: 'A default company profile.',
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const Sidebar = () => (
    <Box
      w={{ base: 'full', md: '250px' }}
      bg={sidebarBg}
      p={4}
      borderRight="1px solid"
      borderColor="gray.200"
      minH="calc(100vh - 160px)"
    >
      <VStack align="start" spacing={4}>
        <Heading size="md" color="red.500">Company Dashboard</Heading>
        <ChakraLink as={Link} onClick={() => setActiveSection('overview')} color={activeSection === 'overview' ? 'red.400' : 'gray.600'}>
          <Flex align="center"><FiHome style={{ marginRight: '8px' }} /> Overview</Flex>
        </ChakraLink>
        <ChakraLink as={Link} to="/create-ad" color="gray.600">
          <Flex align="center"><FiPlusSquare style={{ marginRight: '8px' }} /> Create Ad</Flex>
        </ChakraLink>
        <ChakraLink as={Link} to="/manage-ads" color="gray.600">
          <Flex align="center"><FiList style={{ marginRight: '8px' }} /> Manage Ads</Flex>
        </ChakraLink>
        <ChakraLink as={Link} to="Frontend/src/pages/Company/InfluencerDiscover.jsx" color="gray.600">
          <Flex align="center"><FiSearch style={{ marginRight: '8px' }} /> Discover Influencers</Flex>
        </ChakraLink>
        <ChakraLink as={Link} onClick={() => setActiveSection('analytics')} color={activeSection === 'analytics' ? 'red.400' : 'gray.600'}>
          <Flex align="center"><FiBarChart2 style={{ marginRight: '8px' }} /> Analytics</Flex>
        </ChakraLink>
        <ChakraLink as={Link} onClick={() => setActiveSection('messages')} color={activeSection === 'messages' ? 'red.400' : 'gray.600'}>
          <Flex align="center"><FiMessageSquare style={{ marginRight: '8px' }} /> Messages</Flex>
        </ChakraLink>
        <ChakraLink as={Link} to="/profile" state={{ userData: companyProfile }} color="gray.600">
          <Flex align="center"><FiUser style={{ marginRight: '8px' }} /> Profile</Flex>
        </ChakraLink>
        <ChakraLink onClick={handleLogout} color="gray.600">
          <Flex align="center"><FiLogOut style={{ marginRight: '8px' }} /> Logout</Flex>
        </ChakraLink>
      </VStack>
    </Box>
  );

  const OverviewSection = () => (
    <Box p={6}>
      <Heading size="lg" mb={4} color="red.500">Dashboard Overview</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
        <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
          <StatLabel>Total Impressions</StatLabel>
          <StatNumber>{mockAnalytics.totalImpressions.toLocaleString()}</StatNumber>
          <StatHelpText>Across all campaigns</StatHelpText>
        </Stat>
        <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
          <StatLabel>Total Clicks</StatLabel>
          <StatNumber>{mockAnalytics.totalClicks}</StatNumber>
          <StatHelpText>Across all campaigns</StatHelpText>
        </Stat>
        <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
          <StatLabel>Avg. Engagement</StatLabel>
          <StatNumber>{mockAnalytics.avgEngagement}</StatNumber>
          <StatHelpText>Across all campaigns</StatHelpText>
        </Stat>
      </SimpleGrid>
      <Flex mb={6} gap={4}>
        <Button
          as={Link}
          to="/create-ad"
          bgGradient="linear(to-r, red.400, orange.400)"
          color="white"
          _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
        >
          Create New Ad
        </Button>
        <Button
          as={Link}
          to="/company/influencer-discover"
          bgGradient="linear(to-r, red.400, orange.400)"
          color="white"
          _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
        >
          Discover Influencers
        </Button>
      </Flex>
      <Heading size="md" mb={4} color={textColor}>Active Campaigns</Heading>
      <Table variant="simple" bg="white" borderRadius="md" boxShadow="md">
        <Thead>
          <Tr>
            <Th>Campaign Name</Th>
            <Th>Status</Th>
            <Th isNumeric>Impressions</Th>
            <Th isNumeric>Clicks</Th>
            <Th isNumeric>Engagement</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockCampaigns.map(campaign => (
            <Tr key={campaign.id}>
              <Td>{campaign.name}</Td>
              <Td>{campaign.status}</Td>
              <Td isNumeric>{campaign.impressions.toLocaleString()}</Td>
              <Td isNumeric>{campaign.clicks}</Td>
              <Td isNumeric>{campaign.engagement}%</Td>
              <Td>
                <Button as={Link} to="/manage-ads" size="sm" colorScheme="red">Manage</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );

  const AnalyticsSection = () => {
    const [filterStatus, setFilterStatus] = useState('');
    const [filterPlatform, setFilterPlatform] = useState('');

    // Filter campaigns based on status and platform
    const filteredCampaigns = mockCampaigns.filter(campaign => {
      const matchesStatus = filterStatus ? campaign.status === filterStatus : true;
      const matchesPlatform = filterPlatform ? campaign.platforms.includes(filterPlatform) : true;
      return matchesStatus && matchesPlatform;
    });

    const totalImpressions = filteredCampaigns.reduce((sum, campaign) => sum + campaign.impressions, 0);
    const totalClicks = filteredCampaigns.reduce((sum, campaign) => sum + campaign.clicks, 0);
    const totalBudget = filteredCampaigns.reduce((sum, campaign) => sum + campaign.budget, 0);
    const avgEngagement = filteredCampaigns.length
      ? (filteredCampaigns.reduce((sum, campaign) => sum + campaign.engagement, 0) / filteredCampaigns.length).toFixed(1)
      : 0;

    return (
      <Box p={6}>
        <Heading size="lg" mb={4} color="red.500">Analytics</Heading>
        <Text mb={4} color={textColor}>Summary of your campaign performance.</Text>

        {/* Overview Metrics */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={8}>
          <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
            <StatLabel>Total Impressions</StatLabel>
            <StatNumber>{totalImpressions.toLocaleString()}</StatNumber>
            <StatHelpText>Across filtered campaigns</StatHelpText>
          </Stat>
          <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
            <StatLabel>Total Clicks</StatLabel>
            <StatNumber>{totalClicks}</StatNumber>
            <StatHelpText>Across filtered campaigns</StatHelpText>
          </Stat>
          <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
            <StatLabel>Avg. Engagement</StatLabel>
            <StatNumber>{avgEngagement}%</StatNumber>
            <StatHelpText>Across filtered campaigns</StatHelpText>
          </Stat>
          <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
            <StatLabel>Total Budget</StatLabel>
            <StatNumber>${totalBudget.toLocaleString()}</StatNumber>
            <StatHelpText>Across filtered campaigns</StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Filters */}
        <VStack spacing={4} align="stretch" mb={8}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box>
              <Text mb={2}>Filter by Status</Text>
              <Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                placeholder="All Statuses"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
              >
                <option value="Live">Live</option>
                <option value="Draft">Draft</option>
                <option value="Completed">Completed</option>
              </Select>
            </Box>
            <Box>
              <Text mb={2}>Filter by Platform</Text>
              <Select
                value={filterPlatform}
                onChange={(e) => setFilterPlatform(e.target.value)}
                placeholder="All Platforms"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
              >
                <option value="Instagram">Instagram</option>
                <option value="YouTube">YouTube</option>
                <option value="TikTok">TikTok</option>
              </Select>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Charts */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={4}>Impressions Over Time</Heading>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={impressionsOverTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="impressions" stroke="#ff4500" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={4}>Engagement by Platform</Heading>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={engagementByPlatform}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="engagement" fill="#ff4500" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </SimpleGrid>

        {/* Campaign Breakdown */}
        <Box mb={8}>
          <Heading size="md" mb={4}>Campaign Breakdown</Heading>
          <Table variant="simple" bg="white" borderRadius="md" boxShadow="md">
            <Thead>
              <Tr>
                <Th>Campaign Name</Th>
                <Th>Status</Th>
                <Th>Impressions</Th>
                <Th>Clicks</Th>
                <Th>Engagement (%)</Th>
                <Th>Budget (USD)</Th>
                <Th>Platforms</Th>
                <Th>CPC (USD)</Th>
                <Th>CPM (USD)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredCampaigns.map(campaign => (
                <Tr key={campaign.id}>
                  <Td>{campaign.name}</Td>
                  <Td>{campaign.status}</Td>
                  <Td>{campaign.impressions.toLocaleString()}</Td>
                  <Td>{campaign.clicks}</Td>
                  <Td>{campaign.engagement}</Td>
                  <Td>${campaign.budget.toLocaleString()}</Td>
                  <Td>{campaign.platforms.join(', ')}</Td>
                  <Td>${campaign.cpc.toFixed(2)}</Td>
                  <Td>${campaign.cpm.toFixed(2)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    );
  };

  const MessagesSection = () => (
    <Box p={6}>
      <Heading size="lg" mb={4} color="red.500">Messages</Heading>
      <Text mb={4} color={textColor}>Recent conversations with influencers.</Text>
      <Table variant="simple" bg="white" borderRadius="md" boxShadow="md">
        <Thead>
          <Tr>
            <Th>Influencer</Th>
            <Th>Last Message</Th>
            <Th>Timestamp</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockMessages.map(message => (
            <Tr key={message.id}>
              <Td>{message.influencer}</Td>
              <Td>{message.lastMessage}</Td>
              <Td>{message.timestamp}</Td>
              <Td>
                <Button as={Link} to="/messages" size="sm" colorScheme="red">View</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );

  return (
    <>
      <Navbar />
      <Flex bg={bgColor}>
        <Sidebar />
        <Box flex="1">
          {activeSection === 'overview' && <OverviewSection />}
          {activeSection === 'analytics' && <AnalyticsSection />}
          {activeSection === 'messages' && <MessagesSection />}
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Dashboard;
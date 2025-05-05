// import React, { useState } from 'react';
// import {
//   Box,
//   Flex,
//   VStack,
//   Heading,
//   Text,
//   SimpleGrid,
//   Stat,
//   StatLabel,
//   StatNumber,
//   Table,
//   Thead,
//   Tbody,
//   Image,
//   Badge,
//   useColorModeValue,
//   Link as ChakraLink,
// } from '@chakra-ui/react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaInstagram, FaYoutube, FaTiktok, FaUser, FaWallet, FaEnvelope, FaSearch } from 'react-icons/fa';
// import Navbar from '../../components/Navbar.jsx';
// import Footer from '../../components/Footer.jsx';
// import AdCard from '../../components/AdCard.jsx';
// import MessageCard from '../../components/MessageCard.jsx';

// // Mock data for influencer profile
// const mockInfluencerProfile = {
//   name: 'Jane Doe',
//   avatar: 'https://via.placeholder.com/150',
//   categories: ['Fashion', 'Fitness', 'Travel'],
//   socialMedia: [
//     { platform: 'Instagram', followers: 150000, icon: <FaInstagram /> },
//     { platform: 'YouTube', followers: 200000, icon: <FaYoutube /> },
//     { platform: 'TikTok', followers: 80000, icon: <FaTiktok /> },
//   ],
// };

// // Mock data for ads (filtered by influencer's categories)
// const mockAds = [
//   {
//     id: 1,
//     companyName: 'Fashion Co.',
//     campaignName: 'Summer Sale',
//     budget: 500,
//     platforms: ['Instagram'],
//     description: 'Promote our summer clothing line on Instagram.',
//     category: 'Fashion',
//   },
//   {
//     id: 2,
//     companyName: 'FitGear',
//     campaignName: 'Fitness Challenge',
//     budget: 700,
//     platforms: ['TikTok'],
//     description: 'Create a fitness challenge video on TikTok.',
//     category: 'Fitness',
//   },
//   {
//     id: 3,
//     companyName: 'TravelNow',
//     campaignName: 'Winter Getaway',
//     budget: 600,
//     platforms: ['YouTube'],
//     description: 'Showcase a winter travel destination on YouTube.',
//     category: 'Travel',
//   },
// ];

// // Mock data for companies searching in related categories
// const mockCompanySearches = [
//   { name: 'StyleTrend', category: 'Fashion', lookingFor: 'Instagram influencers' },
//   { name: 'GymPro', category: 'Fitness', lookingFor: 'TikTok creators' },
//   { name: 'Wanderlust', category: 'Travel', lookingFor: 'YouTube vloggers' },
// ];

// // Mock data for messages
// const mockMessages = [
//   { id: 1, company: 'Fashion Co.', lastMessage: 'Interested in collaborating?', timestamp: '2025-05-03' },
//   { id: 2, company: 'FitGear', lastMessage: 'Let’s discuss the fitness challenge.', timestamp: '2025-05-02' },
// ];

// const InfluencerDashboard = () => {
//   const navigate = useNavigate();
//   const bgColor = useColorModeValue('gray.50', 'gray.800');
//   const sidebarBg = useColorModeValue('white', 'gray.700');
//   const textColor = useColorModeValue('gray.800', 'white');

//   // Calculate total followers and cost
//   const totalFollowers = mockInfluencerProfile.socialMedia.reduce((sum, sm) => sum + sm.followers, 0);
//   const costPerAd = (totalFollowers / 1000) * 1; // $1 per 1000 followers

//   // Mock earnings
//   const totalEarnings = 1800; // Mock value for demonstration

//   // State for accepted ads
//   const [acceptedAds, setAcceptedAds] = useState([]);

//   const handleAcceptAd = (adId) => {
//     setAcceptedAds([...acceptedAds, adId]);
//   };

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   const Sidebar = () => (
//     <Box
//       w={{ base: 'full', md: '250px' }}
//       bg={sidebarBg}
//       p={4}
//       borderRight="1px solid"
//       borderColor="gray.200"
//       minH="calc(100vh - 160px)"
//     >
//       <VStack align="start" spacing={4}>
//         <Heading size="md" color="red.500">Influencer Dashboard</Heading>
//         <ChakraLink as={Link} to="/influencer/dashboard" color="red.400">
//           <Flex align="center"><FaUser style={{ marginRight: '8px' }} /> Dashboard</Flex>
//         </ChakraLink>
//         <ChakraLink as={Link} to="/influencer/profile" color="gray.600">
//           <Flex align="center"><FaUser style={{ marginRight: '8px' }} /> Profile</Flex>
//         </ChakraLink>
//         <ChakraLink as={Link} to="/influencer/earnings" color="gray.600">
//           <Flex align="center"><FaWallet style={{ marginRight: '8px' }} /> Earnings</Flex>
//         </ChakraLink>
//         <ChakraLink as={Link} to="/influencer/messages" color="gray.600">
//           <Flex align="center"><FaEnvelope style={{ marginRight: '8px' }} /> Messages</Flex>
//         </ChakraLink>
//         <ChakraLink onClick={handleLogout} color="gray.600">
//           <Flex align="center"><FaEnvelope style={{ marginRight: '8px' }} /> Logout</Flex>
//         </ChakraLink>
//       </VStack>
//     </Box>
//   );

//   const ProfileSection = () => (
//     <Box p={6} bg="white" borderRadius="md" boxShadow="md" mb={6}>
//       <Flex align="center" mb={4}>
//         <Image
//           src={mockInfluencerProfile.avatar}
//           alt={`${mockInfluencerProfile.name}'s avatar`}
//           boxSize="80px"
//           borderRadius="full"
//           mr={4}
//           objectFit="cover"
//         />
//         <Box>
//           <Heading size="md" color="red.500">{mockInfluencerProfile.name}</Heading>
//           <Text color={textColor}>Total Followers: {totalFollowers.toLocaleString()}</Text>
//           <Text color={textColor}>Cost per Ad: ${costPerAd.toFixed(2)}</Text>
//         </Box>
//       </Flex>
//       <Text mb={2} fontWeight="bold">Connected Social Media:</Text>
//       {mockInfluencerProfile.socialMedia.map((sm, index) => (
//         <Flex key={index} align="center" mb={2}>
//           {sm.icon}
//           <Text ml={2}>{sm.platform}: {sm.followers.toLocaleString()} followers</Text>
//         </Flex>
//       ))}
//       <Text mt={4} fontWeight="bold">Selected Categories:</Text>
//       <Flex gap={2}>
//         {mockInfluencerProfile.categories.map((category, index) => (
//           <Badge key={index} colorScheme="red">{category}</Badge>
//         ))}
//       </Flex>
//     </Box>
//   );

//   const EarningsSection = () => (
//     <Box p={6} bg="white" borderRadius="md" boxShadow="md" mb={6}>
//       <Heading size="md" mb={4} color="red.500">Your Earnings</Heading>
//       <Stat>
//         <StatLabel>Total Earnings</StatLabel>
//         <StatNumber>${totalEarnings.toLocaleString()}</StatNumber>
//         <StatHelpText>From accepted ads</StatHelpText>
//       </Stat>
//     </Box>
//   );

//   const AdsSection = () => (
//     <Box p={6} bg="white" borderRadius="md" boxShadow="md" mb={6}>
//       <Heading size="md" mb={4} color="red.500">Relevant Ads</Heading>
//       <Text mb={4} color={textColor}>Ads matching your selected categories: {mockInfluencerProfile.categories.join(', ')}</Text>
//       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//         {mockAds.map(ad => (
//           <AdCard
//             key={ad.id}
//             ad={ad}
//             onAccept={handleAcceptAd}
//             isAccepted={acceptedAds.includes(ad.id)}
//           />
//         ))}
//       </SimpleGrid>
//     </Box>
//   );

//   const CompanySearchSection = () => (
//     <Box p={6} bg="white" borderRadius="md" boxShadow="md" mb={6}>
//       <Heading size="md" mb={4} color="red.500">Companies Searching in Your Categories</Heading>
//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Company</Th>
//             <Th>Category</Th>
//             <Th>Looking For</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {mockCompanySearches.map((company, index) => (
//             <Tr key={index}>
//               <Td>{company.name}</Td>
//               <Td>{company.category}</Td>
//               <Td>{company.lookingFor}</Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );

//   const MessagesSection = () => (
//     <Box p={6} bg="white" borderRadius="md" boxShadow="md">
//       <Heading size="md" mb={4} color="red.500">Messages from Companies</Heading>
//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Company</Th>
//             <Th>Last Message</Th>
//             <Th>Timestamp</Th>
//             <Th>Actions</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {mockMessages.map(message => (
//             <MessageCard key={message.id} message={message} />
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );

//   return (
//     <>
//       <Navbar />
//       <Flex bg={bgColor}>
//         <Sidebar />
//         <Box flex="1">
//           <ProfileSection />
//           <EarningsSection />
//           <AdsSection />
//           <CompanySearchSection />
//           <MessagesSection />
//         </Box>
//       </Flex>
//       <Footer />
//     </>
//   );
// };

// export default InfluencerDashboard;


import React, { useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
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
  Image,
  Badge,
  useColorModeValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaTiktok, FaUser, FaWallet, FaEnvelope, FaSearch } from 'react-icons/fa';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import AdCard from '../../components/AdCard.jsx';
import MessageCard from '../../components/MessageCard.jsx';

// Mock data for influencer profile
const mockInfluencerProfile = {
  name: 'Jane Doe',
  avatar: 'https://placehold.co/150x150', // Updated placeholder image URL
  categories: ['Fashion', 'Fitness', 'Travel'],
  socialMedia: [
    { platform: 'Instagram', followers: 150000, icon: <FaInstagram /> },
    { platform: 'YouTube', followers: 200000, icon: <FaYoutube /> },
    { platform: 'TikTok', followers: 80000, icon: <FaTiktok /> },
  ],
};

// Mock data for ads (filtered by influencer's categories)
const mockAds = [
  {
    id: 1,
    companyName: 'Fashion Co.',
    campaignName: 'Summer Sale',
    budget: 500,
    platforms: ['Instagram'],
    description: 'Promote our summer clothing line on Instagram.',
    category: 'Fashion',
  },
  {
    id: 2,
    companyName: 'FitGear',
    campaignName: 'Fitness Challenge',
    budget: 700,
    platforms: ['TikTok'],
    description: 'Create a fitness challenge video on TikTok.',
    category: 'Fitness',
  },
  {
    id: 3,
    companyName: 'TravelNow',
    campaignName: 'Winter Getaway',
    budget: 600,
    platforms: ['YouTube'],
    description: 'Showcase a winter travel destination on YouTube.',
    category: 'Travel',
  },
];

// Mock data for companies searching in related categories
const mockCompanySearches = [
  { name: 'StyleTrend', category: 'Fashion', lookingFor: 'Instagram influencers' },
  { name: 'GymPro', category: 'Fitness', lookingFor: 'TikTok creators' },
  { name: 'Wanderlust', category: 'Travel', lookingFor: 'YouTube vloggers' },
];

// Mock data for messages
const mockMessages = [
  { id: 1, company: 'Fashion Co.', lastMessage: 'Interested in collaborating?', timestamp: '2025-05-03' },
  { id: 2, company: 'FitGear', lastMessage: 'Let’s discuss the fitness challenge.', timestamp: '2025-05-02' },
];

const InfluencerDashboard = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const sidebarBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  // Calculate total followers and cost
  const totalFollowers = mockInfluencerProfile.socialMedia.reduce((sum, sm) => sum + sm.followers, 0);
  const costPerAd = (totalFollowers / 1000) * 1; // $1 per 1000 followers

  // Mock earnings
  const totalEarnings = 1800; // Mock value for demonstration

  // State for accepted ads
  const [acceptedAds, setAcceptedAds] = useState([]);

  const handleAcceptAd = (adId) => {
    setAcceptedAds([...acceptedAds, adId]);
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
        <Heading size="md" color="red.500">Influencer Dashboard</Heading>
        <ChakraLink as={Link} to="/influencer/dashboard" color="red.400">
          <Flex align="center"><FaUser style={{ marginRight: '8px' }} /> Dashboard</Flex>
        </ChakraLink>
        <ChakraLink as={Link} to="/influencer/profile" color="gray.600">
          <Flex align="center"><FaUser style={{ marginRight: '8px' }} /> Profile</Flex>
        </ChakraLink>
        <ChakraLink as={Link} to="/influencer/earnings" color="gray.600">
          <Flex align="center"><FaWallet style={{ marginRight: '8px' }} /> Earnings</Flex>
        </ChakraLink>
        <ChakraLink as={Link} to="/influencer/messages" color="gray.600">
          <Flex align="center"><FaEnvelope style={{ marginRight: '8px' }} /> Messages</Flex>
        </ChakraLink>
        <ChakraLink onClick={handleLogout} color="gray.600">
          <Flex align="center"><FaEnvelope style={{ marginRight: '8px' }} /> Logout</Flex>
        </ChakraLink>
      </VStack>
    </Box>
  );

  const ProfileSection = () => (
    <Box p={6} bg="white" borderRadius="md" boxShadow="md" mb={6}>
      <Flex align="center" mb={4}>
        <Image
          src={mockInfluencerProfile.avatar}
          alt={`${mockInfluencerProfile.name}'s avatar`}
          boxSize="80px"
          borderRadius="full"
          mr={4}
          objectFit="cover"
        />
        <Box>
          <Heading size="md" color="red.500">{mockInfluencerProfile.name}</Heading>
          <Text color={textColor}>Total Followers: {totalFollowers.toLocaleString()}</Text>
          <Text color={textColor}>Cost per Ad: ${costPerAd.toFixed(2)}</Text>
        </Box>
      </Flex>
      <Text mb={2} fontWeight="bold">Connected Social Media:</Text>
      {mockInfluencerProfile.socialMedia.map((sm, index) => (
        <Flex key={index} align="center" mb={2}>
          {sm.icon}
          <Text ml={2}>{sm.platform}: {sm.followers.toLocaleString()} followers</Text>
        </Flex>
      ))}
      <Text mt={4} fontWeight="bold">Selected Categories:</Text>
      <Flex gap={2}>
        {mockInfluencerProfile.categories.map((category, index) => (
          <Badge key={index} colorScheme="red">{category}</Badge>
        ))}
      </Flex>
    </Box>
  );

  const EarningsSection = () => (
    <Box p={6} bg="white" borderRadius="md" boxShadow="md" mb={6}>
      <Heading size="md" mb={4} color="red.500">Your Earnings</Heading>
      <Stat>
        <StatLabel>Total Earnings</StatLabel>
        <StatNumber>${totalEarnings.toLocaleString()}</StatNumber>
        <StatHelpText>From accepted ads</StatHelpText>
      </Stat>
    </Box>
  );

  const AdsSection = () => (
    <Box p={6} bg="white" borderRadius="md" boxShadow="md" mb={6}>
      <Heading size="md" mb={4} color="red.500">Relevant Ads</Heading>
      <Text mb={4} color={textColor}>Ads matching your selected categories: {mockInfluencerProfile.categories.join(', ')}</Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {mockAds.map(ad => (
          <AdCard
            key={ad.id}
            ad={ad}
            onAccept={handleAcceptAd}
            isAccepted={acceptedAds.includes(ad.id)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );

  const CompanySearchSection = () => (
    <Box p={6} bg="white" borderRadius="md" boxShadow="md" mb={6}>
      <Heading size="md" mb={4} color="red.500">Companies Searching in Your Categories</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Company</Th>
            <Th>Category</Th>
            <Th>Looking For</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockCompanySearches.map((company, index) => (
            <Tr key={index}>
              <Td>{company.name}</Td>
              <Td>{company.category}</Td>
              <Td>{company.lookingFor}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );

  const MessagesSection = () => (
    <Box p={6} bg="white" borderRadius="md" boxShadow="md">
      <Heading size="md" mb={4} color="red.500">Messages from Companies</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Company</Th>
            <Th>Last Message</Th>
            <Th>Timestamp</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockMessages.map(message => (
            <MessageCard key={message.id} message={message} />
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
          <ProfileSection />
          <EarningsSection />
          <AdsSection />
          <CompanySearchSection />
          <MessagesSection />
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default InfluencerDashboard;
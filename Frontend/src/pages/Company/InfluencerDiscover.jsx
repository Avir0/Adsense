// import React from 'react';

// const Discover = () => <h1>Discover Campaigns</h1>; export default Discover;
import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Select,
  Input,
  Button,
  Image,
  Flex,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

// Mock data for influencers
const mockInfluencers = [
  {
    id: 1,
    name: 'Jane Doe',
    avatar: 'https://via.placeholder.com/150',
    platform: 'Instagram',
    category: 'Fashion',
    followers: 150000,
    engagementRate: 4.2,
    location: 'New York, USA',
  },
  {
    id: 2,
    name: 'John Smith',
    avatar: 'https://via.placeholder.com/150',
    platform: 'YouTube',
    category: 'Tech',
    followers: 200000,
    engagementRate: 3.8,
    location: 'London, UK',
  },
  {
    id: 3,
    name: 'Emily Brown',
    avatar: 'https://via.placeholder.com/150',
    platform: 'TikTok',
    category: 'Fitness',
    followers: 80000,
    engagementRate: 5.1,
    location: 'Sydney, Australia',
  },
  {
    id: 4,
    name: 'Alex Carter',
    avatar: 'https://via.placeholder.com/150',
    platform: 'Instagram',
    category: 'Travel',
    followers: 120000,
    engagementRate: 4.0,
    location: 'Toronto, Canada',
  },
];

const InfluencerDiscover = () => {
  const navigate = useNavigate();
  const textColor = useColorModeValue('gray.800', 'white');
  const [filterPlatform, setFilterPlatform] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterFollowersMin, setFilterFollowersMin] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  // Filter influencers based on criteria
  const filteredInfluencers = mockInfluencers.filter(influencer => {
    const matchesPlatform = filterPlatform ? influencer.platform === filterPlatform : true;
    const matchesCategory = filterCategory ? influencer.category === filterCategory : true;
    const matchesFollowers = filterFollowersMin ? influencer.followers >= parseInt(filterFollowersMin) : true;
    const matchesLocation = filterLocation ? influencer.location.toLowerCase().includes(filterLocation.toLowerCase()) : true;
    return matchesPlatform && matchesCategory && matchesFollowers && matchesLocation;
  });

  const handleViewProfile = (id) => {
    navigate(`/influencer/${id}`);
  };

  const handleBackToDashboard = () => {
    navigate('/company/dashboard');
  };

  return (
    <>
      <Navbar />
      <Box minH="calc(100vh - 160px)" p={6} bg="gray.50">
        <Heading size="lg" mb={4} color="red.500">Discover Influencers</Heading>
        <Text mb={6} color={textColor}>Browse influencers to collaborate with for your campaigns.</Text>

        {/* Filters */}
        <VStack spacing={4} align="stretch" mb={8}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
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
            <Box>
              <Text mb={2}>Filter by Category</Text>
              <Select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                placeholder="All Categories"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
              >
                <option value="Fashion">Fashion</option>
                <option value="Tech">Tech</option>
                <option value="Fitness">Fitness</option>
                <option value="Travel">Travel</option>
              </Select>
            </Box>
            <Box>
              <Text mb={2}>Min Followers</Text>
              <Input
                type="number"
                value={filterFollowersMin}
                onChange={(e) => setFilterFollowersMin(e.target.value)}
                placeholder="Min followers (e.g., 50000)"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
              />
            </Box>
            <Box>
              <Text mb={2}>Filter by Location</Text>
              <Input
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                placeholder="Enter location (e.g., New York)"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
              />
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Influencer Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredInfluencers.length === 0 ? (
            <Text>No influencers found matching your criteria.</Text>
          ) : (
            filteredInfluencers.map(influencer => (
              <Box
                key={influencer.id}
                p={4}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                transition="all 0.2s"
                _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)' }}
              >
                <Flex align="center" mb={4}>
                  <Image
                    src={influencer.avatar}
                    alt={`${influencer.name}'s avatar`}
                    boxSize="50px"
                    borderRadius="full"
                    mr={4}
                    objectFit="cover"
                  />
                  <Box>
                    <Text fontWeight="bold" fontSize="lg">{influencer.name}</Text>
                    <Badge colorScheme="red">{influencer.platform}</Badge>
                  </Box>
                </Flex>
                <Text><strong>Category:</strong> {influencer.category}</Text>
                <Text><strong>Followers:</strong> {influencer.followers.toLocaleString()}</Text>
                <Text><strong>Engagement Rate:</strong> {influencer.engagementRate}%</Text>
                <Text><strong>Location:</strong> {influencer.location}</Text>
                <Button
                  mt={4}
                  bgGradient="linear(to-r, red.400, orange.400)"
                  color="white"
                  _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
                  onClick={() => handleViewProfile(influencer.id)}
                >
                  View Profile
                </Button>
              </Box>
            ))
          )}
        </SimpleGrid>

        {/* Back to Dashboard */}
        <Button
          mt={8}
          bgGradient="linear(to-r, red.400, orange.400)"
          color="white"
          _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
          onClick={handleBackToDashboard}
        >
          Back to Dashboard
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default InfluencerDiscover;
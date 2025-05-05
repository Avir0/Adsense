import React from 'react';
import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

const InfluencerProfile = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <>
      <Navbar />
      <Box minH="calc(100vh - 160px)" p={6} bg={bgColor}>
        <Heading size="lg" mb={4} color="red.500">Your Profile</Heading>
        <Text mb={4} color={textColor}>View and edit your profile details here.</Text>
        {/* Add profile form and details here */}
        <Button
          bgGradient="linear(to-r, red.400, orange.400)"
          color="white"
          _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
          onClick={() => navigate('/influencer/dashboard')}
        >
          Back to Dashboard
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default InfluencerProfile;
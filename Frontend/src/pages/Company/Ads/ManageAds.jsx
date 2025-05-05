// import React from 'react';

// const ManageAds = () => <h1>Manage Ads</h1>; export default ManageAds;

import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';

// Mock initial ad data
const initialAds = [
  { id: 1, campaignName: 'Summer Sale', status: 'Live', budget: 5000, targetAgeRange: '18-24', targetInterests: ['Fashion', 'Lifestyle'], platforms: ['Instagram'], duration: 30, adMedia: null },
  { id: 2, campaignName: 'Winter Launch', status: 'Draft', budget: 3000, targetAgeRange: '25-34', targetInterests: ['Tech'], platforms: ['YouTube'], duration: 15, adMedia: null },
  { id: 3, campaignName: 'Spring Promo', status: 'Completed', budget: 7000, targetAgeRange: '35-44', targetInterests: ['Travel'], platforms: ['TikTok'], duration: 20, adMedia: null },
];

const ManageAds = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ads, setAds] = useState(initialAds);
  const [selectedAd, setSelectedAd] = useState(null);

  // Check for new ad data from CreateAd.jsx
  useEffect(() => {
    const newAd = location.state?.adData;
    if (newAd) {
      setAds(prevAds => [...prevAds, { id: prevAds.length + 1, status: 'Draft', ...newAd }]);
    }
  }, [location.state]);

  const handleViewDetails = (ad) => {
    setSelectedAd(ad);
    onOpen();
  };

  const handleEdit = (ad) => {
    // Simulate editing by logging (can redirect to an edit page in the future)
    console.log('Editing ad:', ad);
    toast({
      title: 'Edit Ad',
      description: `Editing ${ad.campaignName}. (Feature to be implemented)`,
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleDelete = (adId) => {
    setAds(ads.filter(ad => ad.id !== adId));
    toast({
      title: 'Ad Deleted',
      description: 'The ad campaign has been deleted.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleBackToDashboard = () => {
    navigate('/company/dashboard');
  };

  return (
    <>
      <Navbar />
      <Box minH="calc(100vh - 160px)" p={6} bg="gray.50">
        <Heading size="lg" mb={4} color="red.500">Manage Ad Campaigns</Heading>
        <Text mb={6} color="gray.600">View and manage your ad campaigns below.</Text>
        {ads.length === 0 ? (
          <Text>No ad campaigns found. Create a new ad to get started.</Text>
        ) : (
          <Table variant="simple" bg="white" borderRadius="md" boxShadow="md">
            <Thead>
              <Tr>
                <Th>Campaign Name</Th>
                <Th>Status</Th>
                <Th>Budget (USD)</Th>
                <Th>Target Age</Th>
                <Th>Platforms</Th>
                <Th>Duration (Days)</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ads.map(ad => (
                <Tr key={ad.id}>
                  <Td>{ad.campaignName}</Td>
                  <Td>{ad.status}</Td>
                  <Td>${ad.budget.toLocaleString()}</Td>
                  <Td>{ad.targetAgeRange}</Td>
                  <Td>{ad.platforms.join(', ')}</Td>
                  <Td>{ad.duration}</Td>
                  <Td>
                    <Button size="sm" colorScheme="red" mr={2} onClick={() => handleViewDetails(ad)}>
                      View Details
                    </Button>
                    <Button size="sm" colorScheme="orange" mr={2} onClick={() => handleEdit(ad)}>
                      Edit
                    </Button>
                    <Button size="sm" colorScheme="gray" onClick={() => handleDelete(ad.id)}>
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
        <Button
          mt={6}
          bgGradient="linear(to-r, red.400, orange.400)"
          color="white"
          _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
          onClick={handleBackToDashboard}
        >
          Back to Dashboard
        </Button>

        {/* Modal for View Details */}
        {selectedAd && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedAd.campaignName}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <VStack spacing={4} align="stretch">
                  <Text><strong>Status:</strong> {selectedAd.status}</Text>
                  <Text><strong>Description:</strong> {selectedAd.description || 'No description provided.'}</Text>
                  <Text><strong>Budget:</strong> ${selectedAd.budget.toLocaleString()}</Text>
                  <Text><strong>Target Age Range:</strong> {selectedAd.targetAgeRange}</Text>
                  <Text><strong>Target Interests:</strong> {selectedAd.targetInterests.join(', ') || 'None'}</Text>
                  <Text><strong>Platforms:</strong> {selectedAd.platforms.join(', ')}</Text>
                  <Text><strong>Duration:</strong> {selectedAd.duration} days</Text>
                  <Text><strong>Ad Media:</strong> {selectedAd.adMedia || 'None'}</Text>
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default ManageAds;
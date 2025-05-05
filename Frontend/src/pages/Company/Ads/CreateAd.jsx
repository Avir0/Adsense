// import React from 'react';

// const CreateAd = () => <h1>Create Ad</h1>; export default CreateAd;

// import React, { useState } from 'react';
// import {
//   Box,
//   VStack,
//   Heading,
//   Text,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Select,
//   Checkbox,
//   CheckboxGroup,
//   Stack,
//   Button,
//   useToast,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../../../components/Navbar.jsx';
// import Footer from '../../../components/Footer.jsx';

// const CreateAd = () => {
//   const navigate = useNavigate();
//   const toast = useToast();

//   // Form state
//   const [campaignName, setCampaignName] = useState('');
//   const [description, setDescription] = useState('');
//   const [budget, setBudget] = useState('');
//   const [targetAgeRange, setTargetAgeRange] = useState('');
//   const [targetInterests, setTargetInterests] = useState([]);
//   const [platforms, setPlatforms] = useState([]);
//   const [duration, setDuration] = useState('');
//   const [adMedia, setAdMedia] = useState(null);

//   // Available options
//   const ageRanges = ['18-24', '25-34', '35-44', '45-54', '55+'];
//   const interests = ['Fashion', 'Beauty', 'Fitness', 'Travel', 'Food', 'Tech', 'Gaming', 'Lifestyle', 'Parenting', 'Business'];
//   const platformOptions = ['Instagram', 'TikTok', 'YouTube'];

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setAdMedia(file);
//     if (file) {
//       toast({
//         title: 'File Selected',
//         description: `Selected: ${file.name}`,
//         status: 'info',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleSubmit = () => {
//     // Validation
//     if (!campaignName || !budget || !targetAgeRange || platforms.length === 0 || !duration) {
//       toast({
//         title: 'Error',
//         description: 'Please fill in all required fields.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//       return;
//     }

//     if (isNaN(budget) || budget <= 0) {
//       toast({
//         title: 'Error',
//         description: 'Budget must be a positive number.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//       return;
//     }

//     // Simulate ad creation
//     const adData = {
//       campaignName,
//       description,
//       budget: parseFloat(budget),
//       targetAgeRange,
//       targetInterests,
//       platforms,
//       duration,
//       adMedia: adMedia ? adMedia.name : null,
//     };

//     console.log('Ad Created:', adData);

//     // Show success message
//     toast({
//       title: 'Ad Created',
//       description: 'Your ad campaign has been successfully created!',
//       status: 'success',
//       duration: 5000,
//       isClosable: true,
//     });

//     // Redirect to manage ads page
//     navigate('/manage-ads');
//   };

//   const handleBackToDashboard = () => {
//     navigate('/company/dashboard');
//   };

//   return (
//     <>
//       <Navbar />
//       <Box minH="calc(100vh - 160px)" p={6} bg="gray.50">
//         <Heading size="lg" mb={4} color="red.500">Create a New Ad Campaign</Heading>
//         <Text mb={6} color="gray.600">Fill in the details below to create your ad campaign.</Text>
//         <Box p={6} bg="white" borderRadius="md" boxShadow="md">
//           <VStack spacing={4} align="stretch">
//             <FormControl isRequired>
//               <FormLabel>Campaign Name</FormLabel>
//               <Input
//                 value={campaignName}
//                 onChange={(e) => setCampaignName(e.target.value)}
//                 placeholder="Enter campaign name"
//                 focusBorderColor="red.400"
//                 borderColor="orange.300"
//                 _hover={{ borderColor: 'red.400' }}
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Description</FormLabel>
//               <Textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Describe your ad campaign"
//                 focusBorderColor="red.400"
//                 borderColor="orange.300"
//                 _hover={{ borderColor: 'red.400' }}
//                 rows={4}
//               />
//             </FormControl>
//             <FormControl isRequired>
//               <FormLabel>Budget (USD)</FormLabel>
//               <Input
//                 value={budget}
//                 onChange={(e) => setBudget(e.target.value)}
//                 type="number"
//                 placeholder="Enter your budget"
//                 focusBorderColor="red.400"
//                 borderColor="orange.300"
//                 _hover={{ borderColor: 'red.400' }}
//               />
//             </FormControl>
//             <FormControl isRequired>
//               <FormLabel>Target Age Range</FormLabel>
//               <Select
//                 value={targetAgeRange}
//                 onChange={(e) => setTargetAgeRange(e.target.value)}
//                 placeholder="Select age range"
//                 focusBorderColor="red.400"
//                 borderColor="orange.300"
//                 _hover={{ borderColor: 'red.400' }}
//               >
//                 {ageRanges.map(range => (
//                   <option key={range} value={range}>{range}</option>
//                 ))}
//               </Select>
//             </FormControl>
//             <FormControl>
//               <FormLabel>Target Interests</FormLabel>
//               <CheckboxGroup value={targetInterests} onChange={setTargetInterests}>
//                 <Stack direction="row" wrap="wrap" spacing={4}>
//                   {interests.map(interest => (
//                     <Checkbox key={interest} value={interest} colorScheme="red">{interest}</Checkbox>
//                   ))}
//                 </Stack>
//               </CheckboxGroup>
//             </FormControl>
//             <FormControl isRequired>
//               <FormLabel>Platforms</FormLabel>
//               <CheckboxGroup value={platforms} onChange={setPlatforms}>
//                 <Stack direction="row" spacing={4}>
//                   {platformOptions.map(platform => (
//                     <Checkbox key={platform} value={platform} colorScheme="red">{platform}</Checkbox>
//                   ))}
//                 </Stack>
//               </CheckboxGroup>
//             </FormControl>
//             <FormControl isRequired>
//               <FormLabel>Campaign Duration (Days)</FormLabel>
//               <Input
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//                 type="number"
//                 placeholder="Enter duration in days"
//                 focusBorderColor="red.400"
//                 borderColor="orange.300"
//                 _hover={{ borderColor: 'red.400' }}
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Ad Media (Image/Video)</FormLabel>
//               <Input
//                 type="file"
//                 onChange={handleFileChange}
//                 accept="image/*,video/*"
//                 border="none"
//                 p={1}
//               />
//               {adMedia && (
//                 <Text mt={2} fontSize="sm">Selected: {adMedia.name}</Text>
//               )}
//             </FormControl>
//             <Button
//               bgGradient="linear(to-r, red.400, orange.400)"
//               color="white"
//               _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
//               onClick={handleSubmit}
//             >
//               Create Ad
//             </Button>
//             <Button
//               variant="outline"
//               colorScheme="red"
//               onClick={handleBackToDashboard}
//             >
//               Back to Dashboard
//             </Button>
//           </VStack>
//         </Box>
//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default CreateAd;


import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  CheckboxGroup,
  Stack,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';

const CreateAd = () => {
  const navigate = useNavigate();
  const toast = useToast();

  // Form state
  const [campaignName, setCampaignName] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [targetAgeRange, setTargetAgeRange] = useState('');
  const [targetInterests, setTargetInterests] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [duration, setDuration] = useState('');
  const [adMedia, setAdMedia] = useState(null);

  // Available options
  const ageRanges = ['18-24', '25-34', '35-44', '45-54', '55+'];
  const interests = ['Fashion', 'Beauty', 'Fitness', 'Travel', 'Food', 'Tech', 'Gaming', 'Lifestyle', 'Parenting', 'Business'];
  const platformOptions = ['Instagram', 'TikTok', 'YouTube'];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAdMedia(file);
    if (file) {
      toast({
        title: 'File Selected',
        description: `Selected: ${file.name}`,
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSubmit = () => {
    // Validation
    if (!campaignName || !budget || !targetAgeRange || platforms.length === 0 || !duration) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (isNaN(budget) || budget <= 0) {
      toast({
        title: 'Error',
        description: 'Budget must be a positive number.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Simulate ad creation
    const adData = {
      campaignName,
      description,
      budget: parseFloat(budget),
      targetAgeRange,
      targetInterests,
      platforms,
      duration,
      adMedia: adMedia ? adMedia.name : null,
    };

    console.log('Ad Created:', adData);

    // Show success message
    toast({
      title: 'Ad Created',
      description: 'Your ad campaign has been successfully created!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    // Redirect to manage ads page with ad data
    navigate('/manage-ads', { state: { adData } });
  };

  const handleBackToDashboard = () => {
    navigate('/company/dashboard');
  };

  return (
    <>
      <Navbar />
      <Box minH="calc(100vh - 160px)" p={6} bg="gray.50">
        <Heading size="lg" mb={4} color="red.500">Create a New Ad Campaign</Heading>
        <Text mb={6} color="gray.600">Fill in the details below to create your ad campaign.</Text>
        <Box p={6} bg="white" borderRadius="md" boxShadow="md">
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Campaign Name</FormLabel>
              <Input
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                placeholder="Enter campaign name"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your ad campaign"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
                rows={4}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Budget (USD)</FormLabel>
              <Input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                type="number"
                placeholder="Enter your budget"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Target Age Range</FormLabel>
              <Select
                value={targetAgeRange}
                onChange={(e) => setTargetAgeRange(e.target.value)}
                placeholder="Select age range"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
              >
                {ageRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Target Interests</FormLabel>
              <CheckboxGroup value={targetInterests} onChange={setTargetInterests}>
                <Stack direction="row" wrap="wrap" spacing={4}>
                  {interests.map(interest => (
                    <Checkbox key={interest} value={interest} colorScheme="red">{interest}</Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Platforms</FormLabel>
              <CheckboxGroup value={platforms} onChange={setPlatforms}>
                <Stack direction="row" spacing={4}>
                  {platformOptions.map(platform => (
                    <Checkbox key={platform} value={platform} colorScheme="red">{platform}</Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Campaign Duration (Days)</FormLabel>
              <Input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                type="number"
                placeholder="Enter duration in days"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Ad Media (Image/Video)</FormLabel>
              <Input
                type="file"
                onChange={handleFileChange}
                accept="image/*,video/*"
                border="none"
                p={1}
              />
              {adMedia && (
                <Text mt={2} fontSize="sm">Selected: {adMedia.name}</Text>
              )}
            </FormControl>
            <Button
              bgGradient="linear(to-r, red.400, orange.400)"
              color="white"
              _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
              onClick={handleSubmit}
            >
              Create Ad
            </Button>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={handleBackToDashboard}
            >
              Back to Dashboard
            </Button>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default CreateAd;
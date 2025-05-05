// import React from 'react';

// const Profile = () => <h1>Profile Page of Avinash</h1>; export default Profile;

// import React, { useState } from 'react';
// import {
//   Box,
//   Flex,
//   VStack,
//   Heading,
//   Text,
//   IconButton,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Textarea,
//   Avatar,
//   Button,
// } from '@chakra-ui/react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FiEdit, FiSave } from 'react-icons/fi';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const companyIndustries = [
//   'Technology', 'Fashion', 'Beauty', 'Fitness', 'Travel',
//   'Food & Beverage', 'Gaming', 'Lifestyle', 'Healthcare', 'Finance'
// ];

// const companySizes = ['Small (1-50 employees)', 'Medium (51-200 employees)', 'Large (201+ employees)'];

// const Profile = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Retrieve signup data or use default values
//   const signupData = location.state?.userData || {
//     name: 'Default Company',
//     email: 'default@company.com',
//     role: 'company',
//     contactInfo: '+1-555-000-0000',
//     industry: 'Technology',
//     companySize: 'Small (1-50 employees)',
//     website: 'https://defaultcompany.com',
//     description: 'A default company profile.',
//   };

//   const [companyProfile, setCompanyProfile] = useState(signupData);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState(companyProfile);

//   const handleEditToggle = () => {
//     if (isEditing) {
//       setCompanyProfile(editedProfile);
//       console.log('Profile updated:', editedProfile); // Simulate saving to backend
//     }
//     setIsEditing(!isEditing);
//   };

//   const handleProfileChange = (field, value) => {
//     setEditedProfile(prev => ({ ...prev, [field]: value }));
//   };

//   const handleBackToDashboard = () => {
//     navigate('/company/dashboard', { state: { userData: companyProfile } });
//   };

//   return (
//     <>
//       <Navbar />
//       <Box minH="calc(100vh - 160px)" p={6} bg="gray.50">
//         <Flex justify="space-between" align="center" mb={4}>
//           <Flex align="center">
//             <Avatar
//               name={companyProfile.name}
//               size="lg"
//               bg="red.400"
//               color="white"
//               mr={4}
//             />
//             <Heading size="lg" color="red.500">{companyProfile.name}</Heading>
//           </Flex>
//           <IconButton
//             icon={isEditing ? <FiSave /> : <FiEdit />}
//             onClick={handleEditToggle}
//             colorScheme={isEditing ? 'green' : 'red'}
//             aria-label={isEditing ? 'Save Profile' : 'Edit Profile'}
//           />
//         </Flex>
//         <Box p={6} bg="white" borderRadius="md" boxShadow="md">
//           <VStack spacing={4} align="stretch">
//             <FormControl>
//               <FormLabel>Company Name</FormLabel>
//               {isEditing ? (
//                 <Input
//                   value={editedProfile.name}
//                   onChange={(e) => handleProfileChange('name', e.target.value)}
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                 />
//               ) : (
//                 <Text>{companyProfile.name}</Text>
//               )}
//             </FormControl>
//             <FormControl>
//               <FormLabel>Email</FormLabel>
//               <Text>{companyProfile.email}</Text>
//             </FormControl>
//             <FormControl>
//               <FormLabel>Role</FormLabel>
//               <Text>{companyProfile.role.charAt(0).toUpperCase() + companyProfile.role.slice(1)}</Text>
//             </FormControl>
//             <FormControl>
//               <FormLabel>Contact Information (Phone)</FormLabel>
//               {isEditing ? (
//                 <Input
//                   value={editedProfile.contactInfo}
//                   onChange={(e) => handleProfileChange('contactInfo', e.target.value)}
//                   type="tel"
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                 />
//               ) : (
//                 <Text>{companyProfile.contactInfo}</Text>
//               )}
//             </FormControl>
//             <FormControl>
//               <FormLabel>Industry</FormLabel>
//               {isEditing ? (
//                 <Select
//                   value={editedProfile.industry}
//                   onChange={(e) => handleProfileChange('industry', e.target.value)}
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                 >
//                   {companyIndustries.map(ind => (
//                     <option key={ind} value={ind}>{ind}</option>
//                   ))}
//                 </Select>
//               ) : (
//                 <Text>{companyProfile.industry}</Text>
//               )}
//             </FormControl>
//             <FormControl>
//               <FormLabel>Company Size</FormLabel>
//               {isEditing ? (
//                 <Select
//                   value={editedProfile.companySize}
//                   onChange={(e) => handleProfileChange('companySize', e.target.value)}
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                 >
//                   {companySizes.map(size => (
//                     <option key={size} value={size}>{size}</option>
//                   ))}
//                 </Select>
//               ) : (
//                 <Text>{companyProfile.companySize}</Text>
//               )}
//             </FormControl>
//             <FormControl>
//               <FormLabel>Website</FormLabel>
//               {isEditing ? (
//                 <Input
//                   value={editedProfile.website}
//                   onChange={(e) => handleProfileChange('website', e.target.value)}
//                   type="url"
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                 />
//               ) : (
//                 <Text>{companyProfile.website}</Text>
//               )}
//             </FormControl>
//             <FormControl>
//               <FormLabel>Description</FormLabel>
//               {isEditing ? (
//                 <Textarea
//                   value={editedProfile.description}
//                   onChange={(e) => handleProfileChange('description', e.target.value)}
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                   rows={3}
//                 />
//               ) : (
//                 <Text>{companyProfile.description}</Text>
//               )}
//             </FormControl>
//           </VStack>
//         </Box>
//         <Button
//           mt={6}
//           bgGradient="linear(to-r, red.400, orange.400)"
//           color="white"
//           _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
//           onClick={handleBackToDashboard}
//         >
//           Back to Dashboard
//         </Button>
//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default Profile;

import React, { useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Avatar,
  Button,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiEdit, FiSave } from 'react-icons/fi';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

const companyIndustries = [
  'Technology', 'Fashion', 'Beauty', 'Fitness', 'Travel',
  'Food & Beverage', 'Gaming', 'Lifestyle', 'Healthcare', 'Finance'
];

const companySizes = ['Small (1-50 employees)', 'Medium (51-200 employees)', 'Large (201+ employees)'];

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve signup data or use default values
  const signupData = location.state?.userData || {
    name: 'Default Company',
    email: 'default@company.com',
    role: 'company',
    contactInfo: '+1-555-000-0000',
    industry: 'Technology',
    companySize: 'Small (1-50 employees)',
    website: 'https://defaultcompany.com',
    description: 'A default company profile.',
  };

  const [companyProfile, setCompanyProfile] = useState(signupData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(companyProfile);

  const handleEditToggle = () => {
    if (isEditing) {
      setCompanyProfile(editedProfile);
      console.log('Profile updated:', editedProfile); // Simulate saving to backend
    }
    setIsEditing(!isEditing);
  };

  const handleProfileChange = (field, value) => {
    setEditedProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleBackToDashboard = () => {
    navigate('/company/dashboard', { state: { userData: companyProfile } });
  };

  return (
    <>
      <Navbar />
      <Box minH="calc(100vh - 160px)" p={6} bg="gray.50">
        <Flex justify="space-between" align="center" mb={4}>
          <Flex align="center">
            <Avatar
              name={companyProfile.name}
              size="lg"
              bg="red.400"
              color="white"
              mr={4}
            />
            <Heading size="lg" color="red.500">{companyProfile.name}</Heading>
          </Flex>
          <IconButton
            icon={isEditing ? <FiSave /> : <FiEdit />}
            onClick={handleEditToggle}
            colorScheme={isEditing ? 'green' : 'red'}
            aria-label={isEditing ? 'Save Profile' : 'Edit Profile'}
          />
        </Flex>
        <Box p={6} bg="white" borderRadius="md" boxShadow="md">
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Company Name</FormLabel>
              {isEditing ? (
                <Input
                  value={editedProfile.name}
                  onChange={(e) => handleProfileChange('name', e.target.value)}
                  focusBorderColor="red.400"
                  borderColor="orange.300"
                  _hover={{ borderColor: 'red.400' }}
                />
              ) : (
                <Text>{companyProfile.name}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Text>{companyProfile.email}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Text>{companyProfile.role.charAt(0).toUpperCase() + companyProfile.role.slice(1)}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Contact Information (Phone)</FormLabel>
              {isEditing ? (
                <Input
                  value={editedProfile.contactInfo}
                  onChange={(e) => handleProfileChange('contactInfo', e.target.value)}
                  type="tel"
                  focusBorderColor="red.400"
                  borderColor="orange.300"
                  _hover={{ borderColor: 'red.400' }}
                />
              ) : (
                <Text>{companyProfile.contactInfo}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Industry</FormLabel>
              {isEditing ? (
                <Select
                  value={editedProfile.industry}
                  onChange={(e) => handleProfileChange('industry', e.target.value)}
                  focusBorderColor="red.400"
                  borderColor="orange.300"
                  _hover={{ borderColor: 'red.400' }}
                >
                  {companyIndustries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </Select>
              ) : (
                <Text>{companyProfile.industry}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Company Size</FormLabel>
              {isEditing ? (
                <Select
                  value={editedProfile.companySize}
                  onChange={(e) => handleProfileChange('companySize', e.target.value)}
                  focusBorderColor="red.400"
                  borderColor="orange.300"
                  _hover={{ borderColor: 'red.400' }}
                >
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </Select>
              ) : (
                <Text>{companyProfile.companySize}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Website</FormLabel>
              {isEditing ? (
                <Input
                  value={editedProfile.website}
                  onChange={(e) => handleProfileChange('website', e.target.value)}
                  type="url"
                  focusBorderColor="red.400"
                  borderColor="orange.300"
                  _hover={{ borderColor: 'red.400' }}
                />
              ) : (
                <Text>{companyProfile.website}</Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              {isEditing ? (
                <Textarea
                  value={editedProfile.description}
                  onChange={(e) => handleProfileChange('description', e.target.value)}
                  focusBorderColor="red.400"
                  borderColor="orange.300"
                  _hover={{ borderColor: 'red.400' }}
                  rows={3}
                />
              ) : (
                <Text>{companyProfile.description}</Text>
              )}
            </FormControl>
          </VStack>
        </Box>
        <Button
          mt={6}
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

export default Profile;
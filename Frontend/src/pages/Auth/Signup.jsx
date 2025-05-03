// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Button,
// //   Input,
// //   VStack,
// //   Heading,
// //   Text,
// //   RadioGroup,
// //   Radio,
// //   Stack,
// // } from '@chakra-ui/react';
// // import { useNavigate } from 'react-router-dom';
// // import Navbar from "../../components/Navbar";
// // import Footer from "../../components/Footer";


// // const Signup = () => {
// //   const [role, setRole] = useState('influencer');
// //   const [email, setEmail] = useState('');
// //   const [name, setName] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleSignup = async () => {
// //     try {
// //       const res = await fetch('http://localhost:5000 /api/users/register', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ name, email, password, role }),
// //       });

// //       const data = await res.json();

// //       if (res.ok) {
// //         if (data.user.role === 'company') {
// //           navigate('/Company/Dashboard.jsx');
// //         } else {
// //           navigate('/Influencer/Discover.jsx');
// //         }
// //       } else {
// //         alert(data.message || 'Signup failed');
// //       }
// //     } catch (err) {
// //       alert('Error: ' + err.message);
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <Box
// //         bg="blue.50"
// //         minH="calc(100vh - 160px)"
// //         display="flex"
// //         alignItems="center"
// //         justifyContent="center"
// //         px={4}
// //       >
// //         <Box
// //           bg="white"
// //           p={8}
// //           borderRadius="xl"
// //           boxShadow="2xl"
// //           w={{ base: '100%', sm: '400px' }}
// //           borderTop="6px solid"
// //           borderColor="red.400"
// //         >
// //           <Heading mb={2} fontSize="2xl" textAlign="center" color="red.500">
// //             Join Us Now!
// //           </Heading>
// //           <Text fontSize="sm" mb={6} textAlign="center" color="orange.500">
// //             Create an account to get started.
// //           </Text>
// //           <VStack spacing={4}>
// //             <Input
// //               placeholder="Name"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               focusBorderColor="red.400"
// //               borderColor="orange.300"
// //               _hover={{ borderColor: 'red.400' }}
// //             />
// //             <Input
// //               placeholder="Email"
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               focusBorderColor="red.400"
// //               borderColor="orange.300"
// //               _hover={{ borderColor: 'red.400' }}
// //             />
// //             <Input
// //               placeholder="Password"
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               focusBorderColor="red.400"
// //               borderColor="orange.300"
// //               _hover={{ borderColor: 'red.400' }}
// //             />

// //             <RadioGroup onChange={setRole} value={role}>
// //               <Stack direction="row" justify="center" spacing={6}>
// //                 <Radio colorScheme="red" value="influencer">
// //                   Influencer
// //                 </Radio>
// //                 <Radio colorScheme="orange" value="company">
// //                   Company
// //                 </Radio>
// //               </Stack>
// //             </RadioGroup>

// //             <Button
// //               w="full"
// //               bgGradient="linear(to-r, red.400, orange.400)"
// //               color="white"
// //               _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
// //               onClick={handleSignup}
// //             >
// //               Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
// //             </Button>
// //           </VStack>
// //         </Box>
// //       </Box>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Signup;

// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Input,
//   VStack,
//   Heading,
//   Text,
//   RadioGroup,
//   Radio,
//   Stack,
//   Select,
//   FormControl,
//   FormLabel,
//   Textarea,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   Checkbox
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// const Signup = () => {
//   const [role, setRole] = useState('influencer');
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [companySize, setCompanySize] = useState('');
//   const [industry, setIndustry] = useState('');
//   const [website, setWebsite] = useState('');
//   const [description, setDescription] = useState('');
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [verificationDoc, setVerificationDoc] = useState(null);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     if (!termsAccepted) {
//       alert('Please accept the terms and conditions');
//       return;
//     }

//     if (role === 'company' && !verificationDoc) {
//       alert('Please upload verification document');
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('email', email);
//       formData.append('password', password);
//       formData.append('role', role);
      
//       if (role === 'company') {
//         formData.append('companySize', companySize);
//         formData.append('industry', industry);
//         formData.append('website', website);
//         formData.append('description', description);
//         formData.append('verificationDoc', verificationDoc);
//       }

//       const res = await fetch('http://localhost:5000/api/users/register', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await res.json();

//       if (res.ok) {
//         if (data.user.role === 'company') {
//           navigate('/company/dashboard');
//         } else {
//           navigate('/influencer/discover');
//         }
//       } else {
//         alert(data.message || 'Signup failed');
//       }
//     } catch (err) {
//       alert('Error: ' + err.message);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Box
//         bg="blue.50"
//         minH="calc(100vh - 160px)"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         px={4}
//         py={8}
//       >
//         <Box
//           bg="white"
//           p={8}
//           borderRadius="xl"
//           boxShadow="2xl"
//           w={{ base: '100%', md: '600px' }}
//           borderTop="6px solid"
//           borderColor="red.400"
//         >
//           <Heading mb={2} fontSize="2xl" textAlign="center" color="red.500">
//             Join Us Now!
//           </Heading>
//           <Text fontSize="sm" mb={6} textAlign="center" color="orange.500">
//             Create an account to get started
//           </Text>
          
//           <VStack spacing={4} align="stretch">
//             <RadioGroup onChange={setRole} value={role} mb={4}>
//               <Stack direction="row" justify="center" spacing={6}>
//                 <Radio colorScheme="red" value="influencer">
//                   Influencer
//                 </Radio>
//                 <Radio colorScheme="orange" value="company">
//                   Company
//                 </Radio>
//               </Stack>
//             </RadioGroup>

//             <Input
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               focusBorderColor="red.400"
//               borderColor="orange.300"
//               _hover={{ borderColor: 'red.400' }}
//               isRequired
//             />

//             <Input
//               placeholder="Email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               focusBorderColor="red.400"
//               borderColor="orange.300"
//               _hover={{ borderColor: 'red.400' }}
//               isRequired
//             />

//             <Input
//               placeholder="Password (min 8 characters)"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               focusBorderColor="red.400"
//               borderColor="orange.300"
//               _hover={{ borderColor: 'red.400' }}
//               minLength={8}
//               isRequired
//             />

//             {role === 'company' && (
//               <>
//                 <FormControl>
//                   <FormLabel>Company Size</FormLabel>
//                   <Select
//                     placeholder="Select company size"
//                     value={companySize}
//                     onChange={(e) => setCompanySize(e.target.value)}
//                     focusBorderColor="red.400"
//                     borderColor="orange.300"
//                     _hover={{ borderColor: 'red.400' }}
//                   >
//                     <option value="1-10">1-10 employees</option>
//                     <option value="11-50">11-50 employees</option>
//                     <option value="51-200">51-200 employees</option>
//                     <option value="201-500">201-500 employees</option>
//                     <option value="501+">501+ employees</option>
//                   </Select>
//                 </FormControl>

//                 <Input
//                   placeholder="Industry"
//                   value={industry}
//                   onChange={(e) => setIndustry(e.target.value)}
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                 />

//                 <Input
//                   placeholder="Website URL"
//                   type="url"
//                   value={website}
//                   onChange={(e) => setWebsite(e.target.value)}
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                 />

//                 <Textarea
//                   placeholder="Company Description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   focusBorderColor="red.400"
//                   borderColor="orange.300"
//                   _hover={{ borderColor: 'red.400' }}
//                   rows={3}
//                 />

//                 <FormControl>
//                   <FormLabel>Verification Document</FormLabel>
//                   <Input
//                     type="file"
//                     onChange={(e) => setVerificationDoc(e.target.files[0])}
//                     accept=".pdf,.doc,.docx,.jpg,.png"
//                     border="none"
//                     p={1}
//                   />
//                   <Text fontSize="xs" color="gray.500">
//                     Upload business license or official document (PDF, DOC, JPG, PNG)
//                   </Text>
//                 </FormControl>
//               </>
//             )}

//             <Checkbox
//               isChecked={termsAccepted}
//               onChange={(e) => setTermsAccepted(e.target.checked)}
//               colorScheme="red"
//               size="sm"
//             >
//               I agree to the{' '}
//               <Button variant="link" colorScheme="blue" onClick={onOpen}>
//                 Terms and Conditions
//               </Button>
//             </Checkbox>

//             <Button
//               w="full"
//               bgGradient="linear(to-r, red.400, orange.400)"
//               color="white"
//               _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
//               onClick={handleSignup}
//               isLoading={false}
//               loadingText="Creating account..."
//             >
//               Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
//             </Button>
//           </VStack>
//         </Box>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Terms and Conditions</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <Text mb={4}>
//               By creating an account, you agree to our platform's terms of service and privacy policy.
//             </Text>
//             <Text>
//               For companies: You certify that all information provided is accurate and you have the authority to represent your organization.
//             </Text>
//           </ModalBody>
//         </ModalContent>
//       </Modal>

//       <Footer />
//     </>
//   );
// };

// export default Signup;

// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Input,
//   VStack,
//   Heading,
//   Text,
//   RadioGroup,
//   Radio,
//   Stack,
//   FormControl,
//   FormLabel,
//   Checkbox,
//   SimpleGrid,
//   Tag,
//   TagLabel,
//   TagCloseButton,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   Icon
// } from '@chakra-ui/react';
// import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// const influencerCategories = [
//   'Fashion', 'Beauty', 'Fitness', 'Travel', 'Food',
//   'Tech', 'Gaming', 'Lifestyle', 'Parenting', 'Business'
// ];

// const SocialPlatformConnect = ({ platform, icon, onConnect }) => (
//   <Button
//     leftIcon={<Icon as={icon} />}
//     onClick={onConnect}
//     variant="outline"
//     w="full"
//     colorScheme="gray"
//   >
//     Connect {platform}
//   </Button>
// );

// const Signup = () => {
//   const [role, setRole] = useState('influencer');
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');
//   const [categories, setCategories] = useState([]);
//   const [socialAccounts, setSocialAccounts] = useState({
//     instagram: null,
//     tiktok: null,
//     youtube: null
//   });
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const navigate = useNavigate();

//   const handleConnectSocial = (platform) => {
//     // In a real app, this would open OAuth flow
//     alert(`Connecting ${platform}... (OAuth would open here)`);
//     // Simulate successful connection
//     setSocialAccounts(prev => ({
//       ...prev,
//       [platform]: {
//         username: `@${name.toLowerCase().replace(/\s/g, '')}`,
//         followers: Math.floor(Math.random() * 100000),
//         engagement: (Math.random() * 5 + 1).toFixed(1)
//       }
//     }));
//   };

//   const toggleCategory = (category) => {
//     setCategories(prev => 
//       prev.includes(category)
//         ? prev.filter(c => c !== category)
//         : prev.length < 3 ? [...prev, category] : prev
//     );
//   };

//   const handleSignup = async () => {
//     if (password !== passwordConfirm) {
//       alert("Passwords don't match!");
//       return;
//     }
//     if (!termsAccepted) {
//       alert('Please accept the terms and conditions');
//       return;
//     }
//     if (categories.length === 0) {
//       alert('Please select at least one interest category');
//       return;
//     }

//     try {
//       // Simulate API call
//       console.log({
//         email,
//         name,
//         password,
//         role,
//         categories,
//         socialAccounts
//       });
      
//       // Simulate successful signup
//       navigate('/influencer/discover');
//     } catch (err) {
//       alert('Error: ' + err.message);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <Box
//         bg="blue.50"
//         minH="calc(100vh - 160px)"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         px={4}
//         py={8}
//       >
//         <Box
//           bg="white"
//           p={8}
//           borderRadius="xl"
//           boxShadow="2xl"
//           w={{ base: '100%', md: '600px' }}
//           borderTop="6px solid"
//           borderColor="red.400"
//         >
//           <Heading mb={2} fontSize="2xl" textAlign="center" color="red.500">
//             Influencer Sign Up
//           </Heading>
//           <Text fontSize="sm" mb={6} textAlign="center" color="orange.500">
//             Create your influencer profile in minutes
//           </Text>
          
//           <VStack spacing={4} align="stretch">
//             <RadioGroup value={role} onChange={setRole} mb={4}>
//               <Stack direction="row" justify="center" spacing={6}>
//                 <Radio colorScheme="red" value="influencer">
//                   Influencer
//                 </Radio>
//                 <Radio colorScheme="orange" value="company">
//                   Company
//                 </Radio>
//               </Stack>
//             </RadioGroup>

//             <Input
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               focusBorderColor="red.400"
//               borderColor="orange.300"
//               _hover={{ borderColor: 'red.400' }}
//               isRequired
//             />

//             <Input
//               placeholder="Email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               focusBorderColor="red.400"
//               borderColor="orange.300"
//               _hover={{ borderColor: 'red.400' }}
//               isRequired
//             />

//             <Input
//               placeholder="Password (min 8 characters)"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               focusBorderColor="red.400"
//               borderColor="orange.300"
//               _hover={{ borderColor: 'red.400' }}
//               minLength={8}
//               isRequired
//             />

//             <Input
//               placeholder="Confirm Password"
//               type="password"
//               value={passwordConfirm}
//               onChange={(e) => setPasswordConfirm(e.target.value)}
//               focusBorderColor="red.400"
//               borderColor="orange.300"
//               _hover={{ borderColor: 'red.400' }}
//               isRequired
//             />

//             {role === 'influencer' && (
//               <>
//                 <FormControl>
//                   <FormLabel>Connect Social Accounts</FormLabel>
//                   <VStack spacing={3}>
//                     <SocialPlatformConnect 
//                       platform="Instagram" 
//                       icon={FaInstagram} 
//                       onConnect={() => handleConnectSocial('instagram')} 
//                     />
//                     <SocialPlatformConnect 
//                       platform="TikTok" 
//                       icon={FaTiktok} 
//                       onConnect={() => handleConnectSocial('tiktok')} 
//                     />
//                     <SocialPlatformConnect 
//                       platform="YouTube" 
//                       icon={FaYoutube} 
//                       onConnect={() => handleConnectSocial('youtube')} 
//                     />
//                   </VStack>
//                   {socialAccounts.instagram && (
//                     <Text mt={2} fontSize="sm">
//                       Connected: {socialAccounts.instagram.username} ({socialAccounts.instagram.followers.toLocaleString()} followers)
//                     </Text>
//                   )}
//                 </FormControl>

//                 <FormControl>
//                   <FormLabel>Interest Categories (max 3)</FormLabel>
//                   <SimpleGrid columns={2} spacing={2}>
//                     {influencerCategories.map(category => (
//                       <Button
//                         key={category}
//                         size="sm"
//                         variant={categories.includes(category) ? 'solid' : 'outline'}
//                         colorScheme={categories.includes(category) ? 'red' : 'gray'}
//                         onClick={() => toggleCategory(category)}
//                         isDisabled={!categories.includes(category) && categories.length >= 3}
//                       >
//                         {category}
//                       </Button>
//                     ))}
//                   </SimpleGrid>
//                   <Box mt={2}>
//                     {categories.map(category => (
//                       <Tag key={category} mr={2} mb={2} colorScheme="red">
//                         <TagLabel>{category}</TagLabel>
//                         <TagCloseButton onClick={() => toggleCategory(category)} />
//                       </Tag>
//                     ))}
//                   </Box>
//                 </FormControl>
//               </>
//             )}

//             <Checkbox
//               isChecked={termsAccepted}
//               onChange={(e) => setTermsAccepted(e.target.checked)}
//               colorScheme="red"
//               size="sm"
//             >
//               I agree to the{' '}
//               <Button variant="link" colorScheme="blue" onClick={onOpen}>
//                 Terms and Conditions
//               </Button>
//             </Checkbox>

//             <Button
//               w="full"
//               bgGradient="linear(to-r, red.400, orange.400)"
//               color="white"
//               _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
//               onClick={handleSignup}
//               isLoading={false}
//               loadingText="Creating account..."
//             >
//               Complete Sign Up
//             </Button>
//           </VStack>
//         </Box>
//       </Box>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Terms and Conditions</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <Text mb={4}>
//               By creating an account, you agree to our platform's terms of service and privacy policy.
//             </Text>
//             <Text>
//               For influencers: You certify that all social accounts connected are your authentic profiles.
//             </Text>
//           </ModalBody>
//         </ModalContent>
//       </Modal>

//       <Footer />
//     </>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
  Text,
  RadioGroup,
  Radio,
  Stack,
  FormControl,
  FormLabel,
  Checkbox,
  SimpleGrid,
  Tag,
  TagLabel,
  TagCloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Icon,
  Select
} from '@chakra-ui/react';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const influencerCategories = [
  'Fashion', 'Beauty', 'Fitness', 'Travel', 'Food',
  'Tech', 'Gaming', 'Lifestyle', 'Parenting', 'Business'
];

const companyIndustries = [
  'Technology', 'Fashion', 'Beauty', 'Fitness', 'Travel',
  'Food & Beverage', 'Gaming', 'Lifestyle', 'Healthcare', 'Finance'
];

const companySizes = ['Small (1-50 employees)', 'Medium (51-200 employees)', 'Large (201+ employees)'];

const SocialPlatformConnect = ({ platform, icon, onConnect }) => (
  <Button
    leftIcon={<Icon as={icon} />}
    onClick={onConnect}
    variant="outline"
    w="full"
    colorScheme="gray"
  >
    Connect {platform}
  </Button>
);

const Signup = () => {
  const [role, setRole] = useState('influencer');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [contactInfo, setContactInfo] = useState(''); // Added for company contact info
  const [industry, setIndustry] = useState(''); // Added for company industry
  const [companySize, setCompanySize] = useState(''); // Added for company size
  const [website, setWebsite] = useState(''); // Added for company website
  const [verificationDocs, setVerificationDocs] = useState(null); // Added for company verification documents
  const [categories, setCategories] = useState([]);
  const [socialAccounts, setSocialAccounts] = useState({
    instagram: null,
    tiktok: null,
    youtube: null
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleConnectSocial = (platform) => {
    // In a real app, this would open OAuth flow
    alert(`Connecting ${platform}... (OAuth would open here)`);
    // Simulate successful connection
    setSocialAccounts(prev => ({
      ...prev,
      [platform]: {
        username: `@${name.toLowerCase().replace(/\s/g, '')}`,
        followers: Math.floor(Math.random() * 100000),
        engagement: (Math.random() * 5 + 1).toFixed(1)
      }
    }));
  };

  const toggleCategory = (category) => {
    setCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : prev.length < 3 ? [...prev, category] : prev
    );
  };

  const handleFileChange = (e) => {
    // Placeholder for file upload handling
    const file = e.target.files[0];
    setVerificationDocs(file);
    if (file) {
      alert(`File selected: ${file.name} (Upload simulation)`);
    }
  };

  const handleSignup = async () => {
    if (password !== passwordConfirm) {
      alert("Passwords don't match!");
      return;
    }
    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    if (role === 'influencer') {
      if (categories.length === 0) {
        alert('Please select at least one interest category');
        return;
      }
      if (!socialAccounts.instagram && !socialAccounts.tiktok && !socialAccounts.youtube) {
        alert('Please connect at least one social media account');
        return;
      }
    } else if (role === 'company') {
      if (!industry || !companySize || !website || !contactInfo) {
        alert('Please fill in all required company fields');
        return;
      }
    }

    try {
      // Simulate API call
      if (role === 'influencer') {
        console.log({
          email,
          name,
          password,
          role,
          categories,
          socialAccounts
        });
        navigate('/influencer/discover');
      } else {
        console.log({
          email,
          name,
          password,
          role,
          contactInfo,
          industry,
          companySize,
          website,
          verificationDocs: verificationDocs ? verificationDocs.name : null
        });
        alert('Company profile submitted! Awaiting review for authenticity.');
        navigate('/company/dashboard');
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <>
      <Navbar />
      <Box
        bg="blue.50"
        minH="calc(100vh - 160px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
        py={8}
      >
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          boxShadow="2xl"
          w={{ base: '100%', md: '600px' }}
          borderTop="6px solid"
          borderColor="red.400"
        >
          <Heading mb={2} fontSize="2xl" textAlign="center" color="red.500">
            {role === 'influencer' ? 'Influencer Sign Up' : 'Company Sign Up'}
          </Heading>
          <Text fontSize="sm" mb={6} textAlign="center" color="orange.500">
            Create your {role} profile in minutes
          </Text>
          
          <VStack spacing={4} align="stretch">
            <RadioGroup value={role} onChange={setRole} mb={4}>
              <Stack direction="row" justify="center" spacing={6}>
                <Radio colorScheme="red" value="influencer">
                  Influencer
                </Radio>
                <Radio colorScheme="orange" value="company">
                  Company
                </Radio>
              </Stack>
            </RadioGroup>

            <Input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              focusBorderColor="red.400"
              borderColor="orange.300"
              _hover={{ borderColor: 'red.400' }}
              isRequired
            />

            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              focusBorderColor="red.400"
              borderColor="orange.300"
              _hover={{ borderColor: 'red.400' }}
              isRequired
            />

            <Input
              placeholder="Password (min 8 characters)"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor="red.400"
              borderColor="orange.300"
              _hover={{ borderColor: 'red.400' }}
              minLength={8}
              isRequired
            />

            <Input
              placeholder="Confirm Password"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              focusBorderColor="red.400"
              borderColor="orange.300"
              _hover={{ borderColor: 'red.400' }}
              isRequired
            />

            {role === 'influencer' && (
              <>
                <FormControl>
                  <FormLabel>Connect Social Accounts</FormLabel>
                  <VStack spacing={3}>
                    <SocialPlatformConnect 
                      platform="Instagram" 
                      icon={FaInstagram} 
                      onConnect={() => handleConnectSocial('instagram')} 
                    />
                    <SocialPlatformConnect 
                      platform="TikTok" 
                      icon={FaTiktok} 
                      onConnect={() => handleConnectSocial('tiktok')} 
                    />
                    <SocialPlatformConnect 
                      platform="YouTube" 
                      icon={FaYoutube} 
                      onConnect={() => handleConnectSocial('youtube')} 
                    />
                  </VStack>
                  {socialAccounts.instagram && (
                    <Text mt={2} fontSize="sm">
                      Connected: {socialAccounts.instagram.username} ({socialAccounts.instagram.followers.toLocaleString()} followers)
                    </Text>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel>Interest Categories (max 3)</FormLabel>
                  <SimpleGrid columns={2} spacing={2}>
                    {influencerCategories.map(category => (
                      <Button
                        key={category}
                        size="sm"
                        variant={categories.includes(category) ? 'solid' : 'outline'}
                        colorScheme={categories.includes(category) ? 'red' : 'gray'}
                        onClick={() => toggleCategory(category)}
                        isDisabled={!categories.includes(category) && categories.length >= 3}
                      >
                        {category}
                      </Button>
                    ))}
                  </SimpleGrid>
                  <Box mt={2}>
                    {categories.map(category => (
                      <Tag key={category} mr={2} mb={2} colorScheme="red">
                        <TagLabel>{category}</TagLabel>
                        <TagCloseButton onClick={() => toggleCategory(category)} />
                      </Tag>
                    ))}
                  </Box>
                </FormControl>
              </>
            )}

            {role === 'company' && (
              <>
                <FormControl>
                  <FormLabel>Contact Information (Phone)</FormLabel>
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    focusBorderColor="red.400"
                    borderColor="orange.300"
                    _hover={{ borderColor: 'red.400' }}
                    isRequired
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Industry</FormLabel>
                  <Select
                    placeholder="Select industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    focusBorderColor="red.400"
                    borderColor="orange.300"
                    _hover={{ borderColor: 'red.400' }}
                    isRequired
                  >
                    {companyIndustries.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Company Size</FormLabel>
                  <Select
                    placeholder="Select company size"
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    focusBorderColor="red.400"
                    borderColor="orange.300"
                    _hover={{ borderColor: 'red.400' }}
                    isRequired
                  >
                    {companySizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Website</FormLabel>
                  <Input
                    placeholder="https://yourcompany.com"
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    focusBorderColor="red.400"
                    borderColor="orange.300"
                    _hover={{ borderColor: 'red.400' }}
                    isRequired
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Verification Documents (Optional)</FormLabel>
                  <Input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.png"
                    border="none"
                    p={1}
                  />
                  {verificationDocs && (
                    <Text mt={2} fontSize="sm">
                      Selected: {verificationDocs.name}
                    </Text>
                  )}
                </FormControl>
              </>
            )}

            <Checkbox
              isChecked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              colorScheme="red"
              size="sm"
            >
              I agree to the{' '}
              <Button variant="link" colorScheme="blue" onClick={onOpen}>
                Terms and Conditions
              </Button>
            </Checkbox>

            <Button
              w="full"
              bgGradient="linear(to-r, red.400, orange.400)"
              color="white"
              _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
              onClick={handleSignup}
              isLoading={false}
              loadingText="Creating account..."
            >
              Complete Sign Up
            </Button>
          </VStack>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Terms and Conditions</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text mb={4}>
              By creating an account, you agree to our platform's terms of service and privacy policy.
            </Text>
            <Text>
              {role === 'influencer'
                ? 'For influencers: You certify that all social accounts connected are your authentic profiles.'
                : 'For companies: You certify that all provided information is accurate and your business is legitimate.'}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Footer />
    </>
  );
};

export default Signup;
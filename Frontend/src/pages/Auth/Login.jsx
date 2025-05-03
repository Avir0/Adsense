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
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const Login = () => {
  const [role, setRole] = useState('influencer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.user.role === 'company') {
          navigate('/Company/Dashboard.jsx');
        } else {
          navigate('/Influencer/Discover.jsx');
        }
      } else {
        alert(data.message || 'Login failed');
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
      >
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          boxShadow="2xl"
          w={{ base: '100%', sm: '400px' }}
          borderTop="6px solid"
          borderColor="blue.400"
        >
          <Heading mb={2} fontSize="2xl" textAlign="center" color="blue.500">
            Welcome Back!
          </Heading>
          <Text fontSize="sm" mb={6} textAlign="center" color="orange.500">
            Login to your account
          </Text>
          <VStack spacing={4}>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              focusBorderColor="red.400"
              borderColor="orange.300"
              _hover={{ borderColor: 'red.400' }}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor="red.400"
              borderColor="orange.300"
              _hover={{ borderColor: 'red.400' }}
            />

            <RadioGroup onChange={setRole} value={role}>
              <Stack direction="row" justify="center" spacing={6}>
                <Radio colorScheme="red" value="influencer">
                  Influencer
                </Radio>
                <Radio colorScheme="orange" value="company">
                  Company
                </Radio>
              </Stack>
            </RadioGroup>

            <Button
              w="full"
              bgGradient="linear(to-r, red.400, orange.400)"
              color="white"
              _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
              onClick={handleLogin}
            >
              Login as {role.charAt(0).toUpperCase() + role.slice(1)}
            </Button>
          </VStack>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Login;

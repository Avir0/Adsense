import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const SocialMediaConnect = () => {
  return (
    <Box>
      <Text fontWeight="bold" mb={2}>Connect Social Media Accounts</Text>
      <Flex gap={2}>
        <Button leftIcon={<FaInstagram />} colorScheme="red" variant="outline">
          Connect Instagram
        </Button>
        <Button leftIcon={<FaYoutube />} colorScheme="red" variant="outline">
          Connect YouTube
        </Button>
        <Button leftIcon={<FaTiktok />} colorScheme="red" variant="outline">
          Connect TikTok
        </Button>
      </Flex>
    </Box>
  );
};

export default SocialMediaConnect;
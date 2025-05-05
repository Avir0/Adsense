import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const AdCard = ({ ad, onAccept, isAccepted }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
      <Text fontWeight="bold">{ad.campaignName}</Text>
      <Text><strong>Company:</strong> {ad.companyName}</Text>
      <Text><strong>Category:</strong> {ad.category}</Text>
      <Text><strong>Budget:</strong> ${ad.budget}</Text>
      <Text><strong>Platforms:</strong> {ad.platforms.join(', ')}</Text>
      <Text><strong>Description:</strong> {ad.description}</Text>
      <Button
        mt={4}
        bgGradient="linear(to-r, red.400, orange.400)"
        color="white"
        _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
        onClick={() => onAccept(ad.id)}
        isDisabled={isAccepted}
      >
        {isAccepted ? 'Ad Accepted' : 'Accept Ad'}
      </Button>
    </Box>
  );
};

export default AdCard;
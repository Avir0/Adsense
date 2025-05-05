import React from 'react';
import { Tr, Td, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MessageCard = ({ message }) => {
  return (
    <Tr>
      <Td>{message.company}</Td>
      <Td>{message.lastMessage}</Td>
      <Td>{message.timestamp}</Td>
      <Td>
        <Button as={Link} to="/influencer/messages" size="sm" colorScheme="red">View</Button>
      </Td>
    </Tr>
  );
};

export default MessageCard;
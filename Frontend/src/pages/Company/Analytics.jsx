// import React from 'react';

// const Analytics = () => <h1>Company Analytics</h1>; export default Analytics;

import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

// Mock data for analytics
const mockCampaigns = [
  { id: 1, name: 'Summer Sale', status: 'Live', impressions: 12000, clicks: 450, engagement: 3.5, budget: 5000, platforms: ['Instagram'], cpc: 11.11, cpm: 0.42 },
  { id: 2, name: 'Winter Launch', status: 'Draft', impressions: 0, clicks: 0, engagement: 0, budget: 3000, platforms: ['YouTube'], cpc: 0, cpm: 0 },
  { id: 3, name: 'Spring Promo', status: 'Completed', impressions: 8500, clicks: 300, engagement: 2.8, budget: 7000, platforms: ['TikTok'], cpc: 23.33, cpm: 0.82 },
];

// Mock data for charts
const impressionsOverTime = [
  { date: '2025-04-01', impressions: 2000 },
  { date: '2025-04-02', impressions: 3000 },
  { date: '2025-04-03', impressions: 2500 },
  { date: '2025-04-04', impressions: 4000 },
  { date: '2025-04-05', impressions: 3500 },
];

const engagementByPlatform = [
  { platform: 'Instagram', engagement: 3.5 },
  { platform: 'YouTube', engagement: 0 },
  { platform: 'TikTok', engagement: 2.8 },
];

const Analytics = () => {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('');

  // Filter campaigns based on status and platform
  const filteredCampaigns = mockCampaigns.filter(campaign => {
    const matchesStatus = filterStatus ? campaign.status === filterStatus : true;
    const matchesPlatform = filterPlatform ? campaign.platforms.includes(filterPlatform) : true;
    return matchesStatus && matchesPlatform;
  });

  const totalImpressions = filteredCampaigns.reduce((sum, campaign) => sum + campaign.impressions, 0);
  const totalClicks = filteredCampaigns.reduce((sum, campaign) => sum + campaign.clicks, 0);
  const totalBudget = filteredCampaigns.reduce((sum, campaign) => sum + campaign.budget, 0);
  const avgEngagement = filteredCampaigns.length
    ? (filteredCampaigns.reduce((sum, campaign) => sum + campaign.engagement, 0) / filteredCampaigns.length).toFixed(1)
    : 0;

  const handleExport = () => {
    // Simulate exporting data as CSV
    const csvContent = [
      ['Campaign Name', 'Status', 'Impressions', 'Clicks', 'Engagement (%)', 'Budget (USD)', 'Platforms', 'CPC (USD)', 'CPM (USD)'],
      ...filteredCampaigns.map(campaign => [
        campaign.name,
        campaign.status,
        campaign.impressions,
        campaign.clicks,
        campaign.engagement,
        campaign.budget,
        campaign.platforms.join(', '),
        campaign.cpc.toFixed(2),
        campaign.cpm.toFixed(2),
      ]),
    ]
      .map(row => row.join(','))
      .join('\n');

    console.log('Exporting CSV:\n', csvContent);
    // In a real app, this would trigger a download
    alert('Export simulated! Check console for CSV data.');
  };

  const handleBackToDashboard = () => {
    navigate('/company/dashboard');
  };

  return (
    <>
      <Navbar />
      <Box minH="calc(100vh - 160px)" p={6} bg="gray.50">
        <Heading size="lg" mb={4} color="red.500">Analytics Dashboard</Heading>
        <Text mb={6} color="gray.600">Analyze the performance of your ad campaigns.</Text>

        {/* Overview Metrics */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={8}>
          <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
            <StatLabel>Total Impressions</StatLabel>
            <StatNumber>{totalImpressions.toLocaleString()}</StatNumber>
            <StatHelpText>Across filtered campaigns</StatHelpText>
          </Stat>
          <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
            <StatLabel>Total Clicks</StatLabel>
            <StatNumber>{totalClicks}</StatNumber>
            <StatHelpText>Across filtered campaigns</StatHelpText>
          </Stat>
          <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
            <StatLabel>Avg. Engagement</StatLabel>
            <StatNumber>{avgEngagement}%</StatNumber>
            <StatHelpText>Across filtered campaigns</StatHelpText>
          </Stat>
          <Stat p={4} bg="white" borderRadius="md" boxShadow="md">
            <StatLabel>Total Budget</StatLabel>
            <StatNumber>${totalBudget.toLocaleString()}</StatNumber>
            <StatHelpText>Across filtered campaigns</StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Filters */}
        <VStack spacing={4} align="stretch" mb={8}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box>
              <Text mb={2}>Filter by Status</Text>
              <Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                placeholder="All Statuses"
                focusBorderColor="red.400"
                borderColor="orange.300"
                _hover={{ borderColor: 'red.400' }}
              >
                <option value="Live">Live</option>
                <option value="Draft">Draft</option>
                <option value="Completed">Completed</option>
              </Select>
            </Box>
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
          </SimpleGrid>
        </VStack>

        {/* Charts */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={4}>Impressions Over Time</Heading>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={impressionsOverTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="impressions" stroke="#ff4500" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Heading size="md" mb={4}>Engagement by Platform</Heading>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={engagementByPlatform}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="engagement" fill="#ff4500" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </SimpleGrid>

        {/* Campaign Breakdown */}
        <Box mb={8}>
          <Heading size="md" mb={4}>Campaign Breakdown</Heading>
          <Table variant="simple" bg="white" borderRadius="md" boxShadow="md">
            <Thead>
              <Tr>
                <Th>Campaign Name</Th>
                <Th>Status</Th>
                <Th>Impressions</Th>
                <Th>Clicks</Th>
                <Th>Engagement (%)</Th>
                <Th>Budget (USD)</Th>
                <Th>Platforms</Th>
                <Th>CPC (USD)</Th>
                <Th>CPM (USD)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredCampaigns.map(campaign => (
                <Tr key={campaign.id}>
                  <Td>{campaign.name}</Td>
                  <Td>{campaign.status}</Td>
                  <Td>{campaign.impressions.toLocaleString()}</Td>
                  <Td>{campaign.clicks}</Td>
                  <Td>{campaign.engagement}%</Td>
                  <Td>${campaign.budget.toLocaleString()}</Td>
                  <Td>{campaign.platforms.join(', ')}</Td>
                  <Td>${campaign.cpc.toFixed(2)}</Td>
                  <Td>${campaign.cpm.toFixed(2)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        {/* Export Button */}
        <Button
          mb={6}
          bgGradient="linear(to-r, red.400, orange.400)"
          color="white"
          _hover={{ bgGradient: 'linear(to-r, orange.500, red.500)' }}
          onClick={handleExport}
        >
          Export Analytics as CSV
        </Button>

        {/* Back to Dashboard */}
        <Button
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

export default Analytics;
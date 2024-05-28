import React from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VisibilityIcon from '@mui/icons-material/Visibility';

const data = [
  { rank: 1, name: 'John Doe', calmarRatio: 3.5, overallProfit: '$50,000', avgDailyProfit: '$500', winPercent: '65%', price: '$100' , action : 'View' },
  { rank: 2, name: 'Jane Smith', calmarRatio: 2.8, overallProfit: '$40,000', avgDailyProfit: '$450', winPercent: '60%', price: '$95' , action : 'Buy'},
  { rank: 3, name: 'John Doe', calmarRatio: 3.5, overallProfit: '$50,000', avgDailyProfit: '$500', winPercent: '65%', price: '$100' , action : 'View' },
  { rank: 4, name: 'Jane Smith', calmarRatio: 2.8, overallProfit: '$40,000', avgDailyProfit: '$450', winPercent: '60%', price: '$95' , action : 'Buy'},
  { rank: 5, name: 'John Doe', calmarRatio: 3.5, overallProfit: '$50,000', avgDailyProfit: '$500', winPercent: '65%', price: '$100' , action : 'View' },
  { rank: 6, name: 'Jane Smith', calmarRatio: 2.8, overallProfit: '$40,000', avgDailyProfit: '$450', winPercent: '60%', price: '$95' , action : 'Buy'},
  { rank: 7, name: 'John Doe', calmarRatio: 3.5, overallProfit: '$50,000', avgDailyProfit: '$500', winPercent: '65%', price: '$100' , action : 'View' },
  { rank: 8, name: 'Jane Smith', calmarRatio: 2.8, overallProfit: '$40,000', avgDailyProfit: '$450', winPercent: '60%', price: '$95' , action : 'Buy'},
  { rank: 9, name: 'John Doe', calmarRatio: 3.5, overallProfit: '$50,000', avgDailyProfit: '$500', winPercent: '65%', price: '$100' , action : 'View' },
  { rank: 10, name: 'Jane Smith', calmarRatio: 2.8, overallProfit: '$40,000', avgDailyProfit: '$450', winPercent: '60%', price: '$95' , action : 'Buy'},
  { rank: 11, name: 'John Doe', calmarRatio: 3.5, overallProfit: '$50,000', avgDailyProfit: '$500', winPercent: '65%', price: '$100' , action : 'View' },
  { rank: 12, name: 'Jane Smith', calmarRatio: 2.8, overallProfit: '$40,000', avgDailyProfit: '$450', winPercent: '60%', price: '$95' , action : 'Buy'},
  // Add more data here
];

const getArrowIcon = (value) => {
  return value >= 3 ? <ArrowUpwardIcon style={{ color: 'green' }} /> : <ArrowDownwardIcon style={{ color: 'red' }} />;
};

const Leaderboard = () => {
  return (
    <Container>
      <TableContainer component={Paper} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <Table>
          <TableHead style={{ backgroundColor: '#eaeaea' }}>
            <TableRow  sx={{ borderBottom: '7px solid #ffffff' }}>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Rank</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Name</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Calmar Ratio</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Overall Profit</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Avg Daily Profit</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Win %</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Price</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '16px' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                style={
                  index % 2 === 0
                    ? { backgroundColor: '#acffd7', transition: '0.3s' }
                    : { transition: '0.3s' }
                }
                sx={{ '&:hover': { backgroundColor: '#76bfeb' } ,  borderBottom: '7px solid #ffffff'  }}
              >
                <TableCell>{row.rank}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                   {getArrowIcon(row.calmarRatio)}{row.calmarRatio}
                </TableCell>
                <TableCell>{row.overallProfit}</TableCell>
                <TableCell>{row.avgDailyProfit}</TableCell>
                <TableCell>{row.winPercent}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.action}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Leaderboard;

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';


interface IDataItem {
  id: number;
  name: string;
  title:string;
  // Add other properties as needed
}

const JsonFileFetchApp: React.FC = () => {
  const [data, setData] = useState<IDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/data.json'); // Assuming data.json is in the public directory
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data: ');
      setLoading(false);
    }
  };

  return (
    <Box sx={{width:'100%',
    height: '100%',
    bgcolor: 'rgb(251, 193, 173)',

    }}>
      <h1>Title</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          p:1,
          m: 10,
          bgcolor: 'rgb(251, 193, 173)',
          borderRadius: 4,
          
        }}
       
      >
        
          {data.map((item) => (
            <Box key={item.id}> {item.title}</Box>
               

              


          ))}
          </Box>
        
      )}               
    </Box>
  );
};

export default JsonFileFetchApp;

import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
   
   const [data, setData] = useState([]);
   
   useEffect(() => {
      const fetchData = async () => {
         const result = await axios(
            'https://jsonplaceholder.typicode.com/users',
         );
         setData(result.data);
      };
      fetchData();
   }, []);//?
 
   return (
      <>
         <h1>dash</h1>
         {data.map(item => (
            <li key={item.id}>
               <a href={item.name}>{item.username}</a>
            </li>
         ))}
      </>
   );
};
export default Dashboard;

/*{data.i.map(item => (
   <li key={item.id}>
   <a href={item.name}>{item.username}</a>
   </li>
))}*/
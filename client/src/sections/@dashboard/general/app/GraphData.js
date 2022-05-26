import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//import { totalCon } from 'src/service/api';
import { useState,useEffect} from 'react';

const data = [
  {
    name: 'A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const GraphData=()=> {
  //static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';
//   const [total,setTotal] = useState([]);
// useEffect(()=>{
    
//     const fetchData=async()=>{
//     let totalCo = await totalCon(5);
//     //console.log(totalC);
//     setTotal(totalCo);
// }
// fetchData(); 
// },[])

    return (
      <ResponsiveContainer width="90%" height="50%">
        <BarChart
          width={20}
          height={10}
          data={data}
          margin={{
            top: 35,
            right: 70,
            left: 50,
            bottom: 15,
          }}
        >  
        
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TotalC" fill="#8884d8" />
          {/* <Bar dataKey="pv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    );
  }

export default GraphData;

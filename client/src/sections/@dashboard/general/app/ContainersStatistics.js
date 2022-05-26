import merge from 'lodash/merge';
import { useState,useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, TextField } from '@mui/material';
// components
import { BaseOptionChart } from '../../../../components/chart';
import { translateRect } from '@fullcalendar/react';
import { allContainer } from 'src/service/api';

export default function ContainerStatistics() {

    // ['5 CP Plates', '250 ml Rectangular', '500 ml (Rectangular)', '600 ml (Rectangular)', '700 ml (Circular)', '750 ml (Circular)', '800 ml (Rectangular)', '100 ml (Rectangular)', '1000 ml (Rectangular)', '500 ml (Circular)']
    
    //const [seriesData, setSeriesData] = useState('Month');
    const [total,setTotal] = useState([]);
    const [cat,setCat] = useState([]);

useEffect(()=>{
    const categ = [];
    const cont = [];
    const restID = localStorage.getItem('id') 
    const fetchData=async()=>{
    let totalCo = await allContainer(restID);
    for(let i=0;i<totalCo.length;i++){
        categ.push(totalCo[i].cname);
        cont.push(totalCo[i].TotalC)
    }
    setTotal(cont);
    setCat(categ);
    
}
fetchData(); 
},[])

const CHART_DATA = [
    {
    year: 'Month',
    data: [
        { name: 'Total Containers', data: total},
        // { name: 'Minimum Inventory', data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 50,] },
    ],
    },
];
    
      const chartOptions = merge(BaseOptionChart(), {
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: cat,
        },
        tooltip: {
            y: {
                formatter: (val) => `${val}`,
            },
        },
    });


    return (
        <Card>
            <CardHeader
                title="Container Statistic"
                subheader="TOTAL CONTAINERS"
            />
            {CHART_DATA.map((item) => (
            <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
           
                <ReactApexChart type="bar" series={item.data} options={chartOptions} height={364} />
        
            </Box>
      ))}
            
        </Card>
    );
}
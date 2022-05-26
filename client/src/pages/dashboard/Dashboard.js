// @mui
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Stack } from "@mui/material";
// hooks
import useAuth from "../../hooks/useAuth";
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
import{ Typography }from "@mui/material";
import { AnalyticsWidgetSummary } from "src/sections/@dashboard/general/analytics";
import { ContainerStatistics } from "src/sections/@dashboard/general/app";
import RecentOrders from "./RecentOrders";
import { useState,useEffect} from 'react';
import { totalOrders } from "src/service/api";
import GraphData from "src/sections/@dashboard/general/app/GraphData";
export default function Dashboard() {
    const {themeStretch} = useSettings();
    const [total,setTotal] = useState([]);

    useEffect(()=>{
      const restID = localStorage.getItem('id') 
      const fetchData=async()=>{
      let totaldata = await totalOrders(restID);
      console.log(totaldata);
      setTotal(totaldata);
  }
  fetchData(); 
  },[])

    return (
    
        <Page title="General: Dashboard">
         
        <Container maxWidth={themeStretch ? false : 'xl'}>
            <Typography variant="h4" sx={{mb: 5}}>
                Hi, Welcome back! 
            </Typography>
           
        </Container>
        <Grid container spacing={3}>
            {total.map((item)=>(
 <Grid item xs={12} sm={6} md={3}>
 <AnalyticsWidgetSummary title="Total Orders Served" total={item.totalCount} icon={'eva:shopping-bag-fill'}></AnalyticsWidgetSummary>
</Grid>
            ))}
           
            <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWidgetSummary title="Inventory Remaining" total={50} icon={'eva:shopping-bag-fill'}></AnalyticsWidgetSummary>
            </Grid>
        
            <Grid item xs={12} md={12}>
                <ContainerStatistics/> 
          </Grid>
          <Grid item xs={12} md={9}>
            <RecentOrders /> 
          </Grid>
        </Grid>

    </Page>
    );
}
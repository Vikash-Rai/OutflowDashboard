// @mui
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Stack } from "@mui/material";
// hooks
import useAuth from "../../hooks/useAuth";
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
import { totalSentContainers, totalReceivedContainers } from '../../service/api'

import {
  AppWidgetSummary,
  ContainerStatistics,
} from "../../sections/@dashboard/general/app";
import { useSelector } from "react-redux";
import { useDispatch } from "src/redux/store";
import { useState, useEffect } from "react";
import { getSummaryData } from "src/redux/slices/reporting";
import EcommerceProductList from "./EcommerceProductList";
import Batch from "./Batch";


const Inventory = () => {
  const theme = useTheme();
  const { themeStretch } = useSettings();

  const { summaryData } = useSelector((state) => state.reporting);
  const dispatch = useDispatch();

  const [sent, setSent] = useState([]);
  const [receive, setReceive] = useState([]);
  useEffect(() => {
    const restID1 = localStorage.getItem('id')
    const fetchData = async () => {
      let sdata = await totalSentContainers(restID1);
      console.log(sdata);
      setSent(sdata);
    }
    fetchData();
  }, [])
  useEffect(() => {
    const restID2 = localStorage.getItem('id')
    const fetchData = async () => {
      let rdata = await totalReceivedContainers(restID2);
      console.log(rdata);
      setReceive(rdata);
    }
    fetchData();
  }, [])

  useEffect(() => {
    dispatch(getSummaryData());
  }, [dispatch]);

  return (
    <Page title="General: App">
      <Grid container spacing={3}>
        {receive.map((item)=>(
           <Grid item xs={12} md={4}>
           <AppWidgetSummary
             title="Total Containers Received"
             percent={2.6}
             total={item.receivedContainer}
             chartColor={theme.palette.primary.main}
             chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
           />
         </Grid>
         
        ))}
       
        {sent.map((item) => (
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Containers Sent"
              percent={0.2}
              total={item.sentContainer}
              chartColor={theme.palette.chart.blue[0]}
              chartData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
            />
          </Grid>
        ))}


        <Grid item xs={12} md={4}>
          <AppWidgetSummary
            title="Inventory Remaining"
            percent={2.6}
            total={0}
            chartColor={theme.palette.primary.main}
            chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ContainerStatistics />
        </Grid>
        <Grid item xs={12}>
          {/* <EcommerceProductList /> */}
          <Batch/>
        </Grid>
      </Grid>
    </Page>
  );

}

export default Inventory;
// @mui
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Stack } from "@mui/material";
// hooks
import useAuth from "../../hooks/useAuth";
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
import { useState, useEffect } from "react";

// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
  ContainerStatistics,
} from "../../sections/@dashboard/general/app";
import { useSelector } from "react-redux";
import { useDispatch } from "src/redux/store";
import { getSummaryData } from "src/redux/slices/reporting";
import { totalReceivedContainers } from '../../service/api'

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();
  const [receive, setReceive] = useState([]);
  const {summaryData} = useSelector((state) => state.reporting);  
  const dispatch = useDispatch();
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
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={8}>
            <AppWelcome displayName={user?.username} />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid> */}
          {receive.map((item)=>(
          <Grid item xs={12} md={6}>
            <AppWidgetSummary
              title="Total Containers"
              percent={2.6}
              total={item.receivedContainer}
              chartColor={theme.palette.primary.main}
              chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
            />
          </Grid>
              ))}

          <Grid item xs={12} md={6}>
            <AppWidgetSummary
              title="Circulation"
              percent={0.2}
              total={1111}
              chartColor={theme.palette.chart.blue[0]}
              chartData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Inventory"
              percent={2.6}
              total={0}
              chartColor={theme.palette.primary.main}
              chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Lost Containers"
              percent={0.2}
              total={186}
              chartColor={theme.palette.chart.blue[0]}
              chartData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Others"
              percent={-0.1}
              total={7}
              chartColor={theme.palette.chart.red[0]}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <ContainerStatistics/> 
          </Grid>
{/* 
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled />
          </Grid>

          <Grid item xs={12} lg={8}>
            <AppNewInvoice />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget
                title="Conversion"
                total={38566}
                icon={"eva:person-fill"}
                chartData={48}
              />
              <AppWidget
                title="Applications"
                total={55566}
                icon={"eva:email-fill"}
                color="warning"
                chartData={75}
              />
            </Stack>
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}

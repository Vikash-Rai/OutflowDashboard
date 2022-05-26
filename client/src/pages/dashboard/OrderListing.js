import {
  Container,
  TableRow,
  Button,
  TableCell,
  TableHead,
  CardHeader,
  Typography,
  Divider,
  Grid,
  Box,
  Card,
  Table,
  Switch,
  Tooltip,
  MenuItem,
  TableBody,
  IconButton,
  TableContainer,
  TablePagination,
  FormControlLabel,
} from "@mui/material";
import Iconify from '../../components/Iconify';
import { useEffect, useState } from "react";
import HeaderBreadcrumbs from "src/components/HeaderBreadcrumbs";
import Page from "src/components/Page";
import Scrollbar from "src/components/Scrollbar";
import { TableEmptyRows, TableHeadCustom, TableSearchNotFound } from "src/components/table";
import useSettings from "src/hooks/useSettings";
import useTable, { getComparator, emptyRows } from '../../hooks/useTable';
import { PATH_DASHBOARD } from "src/routes/paths";
import OrderTableRow from "./OrderTableRow";
// import Typography from "src/theme/overrides/Typography";
//import RecentOrders from "./RecentOrders";
import { getAllOrders } from '../../service/api'

const TABLE_HEAD = [
  { id: 'orderId', label: 'Order Id', align: 'left' },
  { id: 'date', label: 'Date', align: 'left' },
  { id: 'containers', label: 'Containers', align: 'center', width: 180 },
  { id: 'skuCount', label: 'SKU wise Count', align: 'center' },
];

const OrderListing = () => {

  const { themeStretch } = useSettings();
  const [posts, setPosts] = useState([]);
  const [pages,setPages]= useState(1);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllOrders(5,pages);
      console.log(data);
      setPosts(data);
    }
    fetchData();
  }, [pages])

  const prevPage=()=>{
    (pages>1)?setPages(pages-1):setPages(1)
  }
  
  const nextPage=()=>{
    setPages(pages+1)
  }

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({
    defaultOrderBy: 'date',
  });
  const [tableData, setTableData] = useState([]);

  const [filterName, setFilterName] = useState('');

  //   useEffect(() => {
  //     if (products.length) {
  //       setTableData(products);
  //     }
  //   }, [products]);

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };



  return (
    <Page title="General: Dashboard">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Order List"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.general.dashboard },
            { name: 'Order Listing', },
          ]}
        />
     
        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Containers</TableCell>
                    <TableCell>Customers</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone</TableCell>
                    {/* <TableCell>SKU Wise Count</TableCell> */}
                  </TableRow>
                  <TableRow>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {posts.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Typography variant="subtitle2">{row.order_no}</Typography>
                      </TableCell>



                      <TableCell>{row.created_at}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>{row.customer_name}</TableCell>
                      <TableCell>{row.address}</TableCell>
                      <TableCell>{row.customer_phone}</TableCell>

                    

                    </TableRow>
                  ))}
                </TableBody>
              </Table>



            </TableContainer>
          </Scrollbar>
          <Divider />

          <Box sx={{ p: 2, textAlign: 'right' }}>
            <Button onClick={prevPage} size="small" color="inherit" startIcon={<Iconify icon={'eva:arrow-circle-left-outline'} />}>
              Prev
            </Button>
            <Button size="small" color="inherit">
            {pages}
          </Button>
            <Button onClick={nextPage} size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-circle-right-outline'} />}>
              Next
            </Button>
          </Box>
      
        </Card>
      </Container>
    </Page>
  );
}

export default OrderListing;
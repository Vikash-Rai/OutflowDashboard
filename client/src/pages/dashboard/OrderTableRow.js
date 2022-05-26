import PropTypes from 'prop-types';
import { sentenceCase } from 'change-case';
// @mui
import { useTheme } from '@mui/material/styles';
import { TableRow, Checkbox, TableCell, Typography } from '@mui/material';

// utils
import { fDate } from "../../utils/formatTime";
import { TableMoreMenu } from 'src/components/table';

OrderTableRow.propTypes = {
    row: PropTypes.object,
}

export default function OrderTableRow({ row }) {
    const theme = useTheme();

    const {orderId, date, containers, skuWiseCount} = row;

    return(
        <TableRow hover>
            <TableCell sx={{ display: 'flex', alignItems: 'center' }} >
            <Typography variant="subtitle2" noWrap>
          {orderId}
        </Typography>
            </TableCell>
            <TableCell align='center'>{ fDate(date) }</TableCell>
            <TableCell align="center">{containers}</TableCell>
            <TableCell align='center'><TableMoreMenu/></TableCell>   
        </TableRow>
    );
}
import PropTypes from 'prop-types';
import { TableRow, TableCell } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
    return (
        <TableRow>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
        </TableRow>
    )
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
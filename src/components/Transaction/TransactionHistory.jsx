import PropTypes from 'prop-types';
import { Transaction } from "./Transaction"
import { TransactionHistoryTable, TableHeader } from './TransactionHistory.styled';

export const TransactionHistory = ({ items  }) => {
    return (
        <TransactionHistoryTable>
            <thead>
                <tr>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </tr>
            </thead>

            <tbody>
            {items.map(({ id, type, amount, currency}) => (
                <Transaction
                key={id}
                type={type}
                amount={amount}
                currency={currency}
                />
            ))}        
               
            </tbody>
        </TransactionHistoryTable>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ),
};
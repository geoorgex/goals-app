import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TableHeading = ({ firstColumnName, items }) => {
  return (
    <TableHead>
      <TableRow>
        {firstColumnName && <TableCell>{firstColumnName}</TableCell>}
        {items.map(item => {
          return <TableCell key={item}>{item}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
};

TableHeading.propTypes = {
  firstColumnName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHeading;

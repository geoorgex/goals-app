import * as React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

interface Props {
  firstColumnName: string,
  items: Array<string>,
}

const TableHeading: React.FC<Props> = ({ firstColumnName, items }) => {
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

export default TableHeading;

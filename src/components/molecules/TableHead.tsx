import * as React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    tableHead: {},
  });

interface Props {
  firstColumnName: string;
  items: string[];
}

const TableHeading: React.FC<Props & WithStyles<typeof styles>> = ({
  firstColumnName,
  items,
  classes,
}) => {
  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        {firstColumnName && <TableCell>{firstColumnName}</TableCell>}
        {items.map(item => {
          return <TableCell key={item}>{item}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
};

export default withStyles(styles)(TableHeading);

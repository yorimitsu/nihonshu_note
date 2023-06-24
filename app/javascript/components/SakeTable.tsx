import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSakesQuery, Sake } from "../graphql/generated";
import ReviewTable from './ReviewTable';

function Row(props: { row: Sake }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.brand}</TableCell>
        <TableCell align="right">{row.brewery}</TableCell>
        <TableCell align="right">{row.classification}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <ReviewTable reviews={row.reviews ?? []} sakeId={row.id} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const SakeTable: React.FC = () => {
  const { data, loading, error } = useSakesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error loading sakes</div>;
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>銘柄</TableCell>
            <TableCell align="right">蔵元</TableCell>
            <TableCell align="right">特定名称・分類</TableCell>
            <TableCell align="right">アルコール度数</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.sakes.map((sake: Sake) => (
            <Row key={sake.id} row={sake} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
  
export default SakeTable;

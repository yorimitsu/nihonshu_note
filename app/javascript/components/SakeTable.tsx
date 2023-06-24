import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSakesQuery, Sake } from "../graphql/generated";
import ReviewForm from './ReviewForm';

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
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.brand}</TableCell>
        <TableCell align="right">{row.brewery}</TableCell>
        <TableCell align="right">{row.classification}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                レビュー
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>評価</TableCell>
                    <TableCell>コメント</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.reviews?.map((review) => (
                    <TableRow key={review.id}>
                      <TableCell component="th" scope="row">
                        {review.comment}
                      </TableCell>
                      <TableCell>{review.rating}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ReviewForm sakeId={row.id} />
            </Box>
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
            <TableCell>名称</TableCell>
            <TableCell align="right">銘柄</TableCell>
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

import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Review } from "../graphql/generated";
import ReviewForm from './ReviewForm';
import Rating from '@mui/material/Rating';

type Props = {
  reviews: Review[];
  sakeId: string;
};

const ReviewTable: React.FC<Props> = ({ reviews, sakeId }) => {
  if (reviews?.length === 0) {
    return (
      <Box sx={{ margin: 1 }}>
        <Typography variant="h6" gutterBottom component="div">
          レビュー
        </Typography>
        <Typography variant="body2" gutterBottom component="div" sx={{ margin: 1 }}>
          レビューはまだありません
        </Typography>
        <ReviewForm sakeId={sakeId} />
      </Box>
    )
  }
  
  return (
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
          {reviews?.map((review) => (
            <TableRow key={review.id}>
              <TableCell component="th" scope="row" style={{ whiteSpace: 'pre-wrap' }}>
                {review.comment}
              </TableCell>
              <TableCell>
                <Rating name="rating" value={review.rating} readOnly />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ReviewForm sakeId={sakeId} />
    </Box>
  );
};
  
export default ReviewTable;

import React, { useState } from 'react';
import { useCreateReviewMutation, Review } from "../graphql/generated";
import Rating from '@mui/material/Rating';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

type Props = {
  sakeId: string;
};

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const ReviewForm: React.FC<Props> = ({ sakeId }) => {
  const [createReview] = useCreateReviewMutation({ refetchQueries: ["sakes"] });
  const [comment, setComment] = useState("");
  const [raiting, setRating] = useState<number | 0>(0);

  return (
    <Box sx={{ m: 1 }}>
      <Box sx={{ m: 1 }}>
        <Typography component="legend">評価</Typography>
        <Rating name="raiting" value={raiting} onChange={(e, newValue) => setRating(newValue ? newValue : 0)}/>
      </Box>
      <Box sx={{ m: 1 }}>
        <Typography component="legend">コメント</Typography>
        <StyledTextarea
          minRows={7}
          aria-label="maximum height"
          placeholder="コメントを入力してください"
          defaultValue={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Box>
      <Box sx={{ m: 1 }}>
        <Button 
          variant="contained" 
          endIcon={<SendIcon />}
          onClick={() => {
            createReview({ variables: { params: { comment: comment, rating: raiting ? Number(raiting) : 0, sakeId: sakeId } } });
            setComment("");
            setRating(0);
          }}
        >
          送信
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewForm;

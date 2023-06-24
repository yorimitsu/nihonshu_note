import React, { useState } from 'react';
import { useCreateReviewMutation, Review } from "../graphql/generated";

type Props = {
  sakeId: string;
};

const ReviewForm: React.FC<Props> = ({ sakeId }) => {
  const [createReview] = useCreateReviewMutation({ refetchQueries: ["sakes"] });
  const [comment, setComment] = useState("");
  const [raiting, setRating] = useState<number | "">("");

  return (
    <div>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <input value={raiting.toString()} onChange={(e) => setRating(e.target.value ? Number(e.target.value) : 0)} />
     <button
       onClick={() => {
         createReview({ variables: { params: { comment: comment, rating: raiting ? Number(raiting) : 0, sakeId: sakeId } } });
         setComment("");
         setRating(0);
       }}
     >
       保存
     </button>
    </div>
  );
};

export default ReviewForm;

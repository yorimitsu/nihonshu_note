import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSakeQuery, useReviewsQuery, useCreateReviewMutation, Review } from "../graphql/generated";

const SakeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [createReview] = useCreateReviewMutation({ refetchQueries: ["sake"] });
  const [comment, setComment] = useState("");
  const [raiting, setRating] = useState("");

  if (!id) {
    return <div>Invalid sake ID</div>;
  }


  const { data, loading, error } = useSakeQuery({ variables: { id } });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data || !data.sake) {
    return <div>Error loading sake details</div>;
  }

  const sake = data.sake;
  const reviews = sake.reviews || [];

  return (
    <div>
      <h1>{sake.name}</h1>
      <p>Brewery: {sake.brewery}</p>
      <p>Classification: {sake.classification}</p>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.comment} - {review.rating}
          </li>
        ))}
      </ul>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <input value={raiting} onChange={(e) => setRating(Number(e.target.value))} />
     <button
       onClick={() => {
         createReview({ variables: { params: { comment: comment, rating: raiting, sakeId: sake.id } } });
         setComment("");
       }}
     >
       保存
     </button>
    </div>
  );
};

export default SakeDetail;

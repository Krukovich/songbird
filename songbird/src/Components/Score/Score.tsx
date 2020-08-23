import React from 'react';

interface Props {
  score: number
}

const Score: React.FC<Props> = ({ score }: Props) => (
  <span className="badge badge-info">
    Score
    {' '}
    {score}
  </span>
);

export default Score;

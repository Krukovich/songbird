import React from 'react';

interface Props {
  score: number
}

const Score: React.FC<Props> = ({ score }: Props) => (
  <>
    Score:
    {score}
  </>
);

export default Score;

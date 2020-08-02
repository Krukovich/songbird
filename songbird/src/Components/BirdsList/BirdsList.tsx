import React from 'react';

interface BirdsListProps {
  birds: any[],
  checkAnswer: Function,
}

const BirdsList: React.FC<BirdsListProps> = (props: BirdsListProps) => {
  const { birds, checkAnswer } = props;

  return (
    <div className="list-group">
      {birds.map((bird) => (
        <button
          type="button"
          className="list-group-item list-group-item-action"
          key={bird.id}
          onClick={() => checkAnswer(bird)}
        >
          {bird.name}
        </button>
      ))}

    </div>
  );
};
export default BirdsList;

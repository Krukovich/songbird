import React from 'react';
import { Bird } from '../../Interfaces/Bird';

interface BirdsListProps {
  birds: any[],
  checkAnswer: Function,
  selectedBird: Bird,
  actualBird: Bird,
}

const BirdsList: React.FC<BirdsListProps> = (props: BirdsListProps) => {
  const {
    birds,
    selectedBird,
    actualBird,
    checkAnswer,
  } = props;

  return (
    <div className="list-group">
      {birds.map((bird) => {
        let highlightCLass: string = '';

        if (bird === selectedBird) {
          highlightCLass = (bird === actualBird) ? 'bg-success' : 'bg-danger';
        }

        return (
          <button
            type="button"
            className={`list-group-item list-group-item-action ${highlightCLass}`}
            key={bird.id}
            onClick={() => checkAnswer(bird)}
          >
            {bird.name}
          </button>
        );
      })}
    </div>
  );
};
export default BirdsList;

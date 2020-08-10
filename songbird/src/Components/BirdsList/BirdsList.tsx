import React from 'react';
import { ANSWER } from '../../Interfaces/Bird';

interface BirdsListProps {
  birds: any[],
  checkAnswer: Function,
  agreeList: ANSWER[],
}

const BirdsList: React.FC<BirdsListProps> = (props: BirdsListProps) => {
  const {
    birds,
    checkAnswer,
    agreeList,
  } = props;

  const insertClass = (name: string) => {
    let highlightClass: string = '';
    agreeList.forEach((item: any) => {
      if (name === item.name) {
        if (item.answer) {
          highlightClass = 'bg-success';
        } else {
          highlightClass = 'bg-danger';
        }
      }
    });
    return highlightClass;
  };

  const toggleDisable = (value: string) => {
    if (value === 'bg-danger') {
      return true;
    }
    return false;
  };

  return (
    <div className="list-group">
      {birds.map((bird) => (
        <button
          type="button"
          className={`list-group-item list-group-item-action ${insertClass(bird.name)}`}
          key={bird.id}
          disabled={toggleDisable(insertClass(bird.name))}
          onClick={() => checkAnswer(bird)}
        >
          {bird.name}
        </button>
      ))}
    </div>
  );
};
export default BirdsList;

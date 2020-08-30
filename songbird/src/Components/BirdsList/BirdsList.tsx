import React from 'react';
import { ANSWER } from '../../Interfaces/Bird';

interface BirdsListProps {
  birds: any[],
  checkAnswer: Function,
  answers: ANSWER[],
}

const BirdsList: React.FC<BirdsListProps> = (props: BirdsListProps) => {
  const {
    birds,
    checkAnswer,
    answers,
  } = props;

  const insertClass = (name: string) => {
    let highlightClass: string = '';
    answers.forEach((item: any) => {
      if (name === item.name) {
        if (item.answer) {
          highlightClass = 'is-valid';
        } else {
          highlightClass = 'is-invalid';
        }
      }
    });
    return highlightClass;
  };

  const toggleDisable = (value: string) => {
    if (value === 'is-invalid') {
      return true;
    }
    return false;
  };

  return (
    <div className="list-group w-100">
      {birds.map((bird) => (
        <input
          type="text"
          className={`form-control mt-2 ${insertClass(bird.name)}`}
          value={bird.name}
          key={bird.id}
          disabled={toggleDisable(insertClass(bird.name))}
          onClick={() => checkAnswer(bird)}
          readOnly
        />
      ))}
    </div>
  );
};
export default BirdsList;

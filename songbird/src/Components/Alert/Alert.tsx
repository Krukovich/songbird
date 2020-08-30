import React from 'react';

interface AlertProps {
  isFalse: boolean,
  nameBird: string,
}

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  const { nameBird, isFalse } = props;

  return (
    <div className="alert alert-info" role="alert">
      {(nameBird && !isFalse) ? nameBird : '*****'}
    </div>
  );
};

export default Alert;

import React from 'react';

interface AlertProps {
  isAgree: boolean,
  nameBird: string,
}

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  const { nameBird, isAgree } = props;

  return (
    <div className="alert alert-info" role="alert">
      {(nameBird && !isAgree) ? nameBird : '*****'}
    </div>
  );
};

export default Alert;

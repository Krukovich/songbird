import React from 'react';

interface menuBtnProps {
  id: number,
  name: string,
  complete: boolean,
}

const MenuBtn: React.FC<menuBtnProps> = (props: menuBtnProps) => {
  const { id, name, complete } = props;
  const changeClassName = () => {
    if (complete) {
      return 'btn btn-info';
    }
    return 'btn btn-light';
  };

  const btn = <button key={id} type="button" className={changeClassName()}>{name}</button>;

  return (
    <>
      {btn}
    </>
  );
};

export default MenuBtn;

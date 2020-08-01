import React from 'react';

interface menuBtnProps {
  title: string
}

const MenuBtn: React.FC<menuBtnProps> = (props: menuBtnProps) => {
  const { title } = props;
  const btn = <button type="button" className="btn btn-info">{title}</button>;
  return (
    <>
      {btn}
    </>
  );
};

export default MenuBtn;

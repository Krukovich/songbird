import React from 'react';
import MenuBtn from './MenuBtn';

interface MenuProps {
  birds: [],
}

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const { birds } = props;

  return (
    <>
      {birds.map((item: { id: number, name: string, complete: boolean }) => (
        <MenuBtn
          key={item.id}
          id={item.id}
          name={item.name}
          complete={item.complete}
        />
      ))}
    </>
  );
};

export default Menu;

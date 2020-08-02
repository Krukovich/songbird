import React from 'react';
import MenuBtn from './MenuBtn';
import { BIRDS } from '../../constants';

interface IMap {
  item: String
}

const Menu = () => (
  <>
    {BIRDS.map((title, index) => <MenuBtn key={index} title={title} />)}
  </>
);

export default Menu;

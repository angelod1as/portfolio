import React from 'react';
import Sidebar from '../../components/Sidebar';

const ItemSidebar = ({ date, title }) => {
  return (
    <Sidebar back="/" title={title}>
      <p className="date">{date}</p>
    </Sidebar>
  );
};

export default ItemSidebar;

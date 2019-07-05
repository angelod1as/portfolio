import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/Sidebar';

const ItemSidebar = ({ date, title, from }) => {
  return (
    <Sidebar back={from || '/'} title={title}>
      <p className="date">{date}</p>
    </Sidebar>
  );
};

ItemSidebar.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  from: PropTypes.string,
};

ItemSidebar.defaultProps = {
  from: null,
};

export default ItemSidebar;

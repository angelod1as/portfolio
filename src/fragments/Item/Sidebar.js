import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sidebar from '../../components/Sidebar';

const Date = styled.p``;
const LongDesc = styled.p``;

const ItemSidebar = props => {
  const { date, from, longdesc, title } = props;
  return (
    <Sidebar back={from || '/'} title={title}>
      <Date>{date}</Date>
      <LongDesc>{longdesc}</LongDesc>
    </Sidebar>
  );
};

ItemSidebar.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  longdesc: PropTypes.string.isRequired,
  from: PropTypes.string,
};

ItemSidebar.defaultProps = {
  from: null,
};

export default ItemSidebar;

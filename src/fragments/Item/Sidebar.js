import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Img from 'gatsby-image';
import Sidebar from '../../components/Sidebar';

// const Date = styled.p`
//   margin: 30px 0;
// `;
const LongDesc = styled.p``;

const ItemSidebar = props => {
  const { date, from, longdesc, title } = props;
  return (
    <Sidebar back={from || '/'} title={title}>
      {/* {fluid ? <Img fluid={fluid} /> : ''} */}
      {/* <Date>{date}</Date> */}
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

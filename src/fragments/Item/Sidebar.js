import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Img from 'gatsby-image';
import Sidebar from '../../components/Sidebar';

// const Date = styled.p`
//   margin: 30px 0;
// `;
const LongDesc = styled.p`
  margin: 30px 0;
`;

const Live = styled.div`
  color: ${p => p.theme.color.color};
  background-color: ${p => p.theme.color.darkgray};
  font-size: 1.3em;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  a {
    width: 100%;
    padding: 10px 20px;
    background-color: ${p => p.theme.color.white};
  }
  &:hover {
    a {
      color: ${p => p.theme.color.color};
      transform: translate(5px, -5px);
    }
  }
`;

const ItemSidebar = props => {
  const { date, from, longdesc, title, live } = props;
  return (
    <Sidebar back={from || '/'} title={title}>
      {/* {fluid ? <Img fluid={fluid} /> : ''} */}
      {/* <Date>{date}</Date> */}
      <LongDesc>{longdesc}</LongDesc>
      {live ? (
        <Live>
          <a href={live} target="_blank" rel="noopener noreferrer">
            See it live
          </a>
        </Live>
      ) : (
        ''
      )}
    </Sidebar>
  );
};

ItemSidebar.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  longdesc: PropTypes.string.isRequired,
  from: PropTypes.string,
  live: PropTypes.string,
};

ItemSidebar.defaultProps = {
  from: null,
  live: null,
};

export default ItemSidebar;

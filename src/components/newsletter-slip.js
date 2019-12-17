import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Slip = styled(Link)`
  /* removing link style*/
  font-family: ${p => p.theme.font.display};
  font-weight: 500;
  text-decoration: none;

  /* style */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  display: flex;
  align-items: center;
  flex-direction: column;
  .wrapper {
    .type {
      transition: all 0.1s;
      background-color: white;
      padding: 20px 10px 10px 10px;
      position: relative;
      top: -10px;
      &:hover {
        top: 0;
      }
    }
    cursor: pointer;
  }
`;

const NewsletterSlip = () => (
  <div>
    <Slip to="/newsletter">
      <div className="wrapper">
        <div className="type">newsletter</div>
      </div>
    </Slip>
  </div>
);

export default NewsletterSlip;

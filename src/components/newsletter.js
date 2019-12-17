import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  transition: all 0.2s;
  width: 100%;
  position: fixed;
  top: -100%;
  left: 0;
  z-index: 10;
  text-align: center;
`;

const Box = styled.div`
  background-color: white;
  padding: 20px;
`;

const Close = styled.div`
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

const ReadMore = styled(Link)`
  background-color: ${p => p.theme.color.white};
  width: 100%;
  max-width: 300px;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  /* border-radius: 5px; */
  &:hover {
    transform: translate(5px, -5px);
    box-shadow: -5px 5px 0px 0px rgba(0, 0, 0, 0.75);
  }
`;

export default class components extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <Wrapper show={show}>
          <Box>
            <div>click here to subscribe to my newsletter (in Portuguese)</div>
            {/* <ReadMore to="/newsletter">Assinar</ReadMore> */}
          </Box>
        </Wrapper>

        <Close onClick={this.handleClick} show={show}>
          <div className="wrapper">
            <div className="type">newsletter</div>
          </div>
        </Close>
      </div>
    );
  }
}

import React from 'react';
import styled from 'styled-components';

// import { ReactComponent as Brazil } from '../../images/flags/brazil.svg';
// import { ReactComponent as Usa } from '../../images/flags/usa.svg';

const FlagsContainer = styled.div`
  button {
    font-size: 0;
    border: 0;
    background: none;
    padding: 0;
    width: 30px;
    height: auto;
    margin-right: 10px;
    cursor: pointer;
    outline: none;
    & > * {
      pointer-events: none;
    }
    svg {
      fill: ${p => p.theme.color.gray};
      transition: fill 0.2s, transform 0.2s;
    }
    &.active svg {
      fill: ${p => p.theme.color.color};
    }
    &:hover svg {
      fill: ${p => p.theme.color.black};
      transform: skewX(-15deg);
    }
  }
`;

const Flags = () => {
  return (
    <FlagsContainer>
      <button
        title="en"
        type="button"
        // className={lang === 'en' ? 'active' : null}
        // onClick={e => changeLanguage(e.target)}
      >
        {/* <Usa /> */}
      </button>
      <button
        title="pt"
        type="button"
        // className={lang === 'pt' ? 'active' : null}
        // onClick={e => changeLanguage(e.target)}
      >
        {/* <Brazil /> */}
      </button>
    </FlagsContainer>
  );
};

export default Flags;

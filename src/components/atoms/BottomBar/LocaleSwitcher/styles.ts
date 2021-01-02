import styled from 'styled-components'

export const BG = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: center;
`

export const Flag = styled.div`
  cursor: pointer;
  margin: 0 10px;
  font-size: 20px;
  transition: transform 0.2s ease;
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.2s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 2px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
`

export const Switch = styled.label`
  position: relative;
  width: 40px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + ${Slider}:before {
    transform: translateX(18px);
  }
`

import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000aa;

  & h3 {
    font-weight: 500;
    width: 90%;
  }
  & span {
    color: green;
  }
`;

export const ButtonClose = styled.button`
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  transition: all 200ms;
  transform: rotate(0);

  &:hover {
    transform: rotate(0.5turn);
  }
`;

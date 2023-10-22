import styled from 'styled-components';
import image from '../../images/phonebook.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 6px;
  background-image: url(${image});
  background-size: cover;
`;
export const Main = styled.main`
  font-weight: bold;
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  opacity: 1;
`;

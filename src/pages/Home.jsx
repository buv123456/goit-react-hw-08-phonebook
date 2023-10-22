import styled from 'styled-components';

const HeaderHome = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
`;

const DivHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <DivHome>
      <HeaderHome>Phonebook</HeaderHome>
    </DivHome>
  );
}

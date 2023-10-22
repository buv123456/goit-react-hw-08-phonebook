import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

const HeaderHome = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
`;

const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <DivHome>
      <HeaderHome>Phonebook</HeaderHome>
      {isLoggedIn ? (
        <p>{`Welcome ${user.name}.`}</p>
      ) : (
        <p>You need to sign in or sign up to view your phone book!</p>
      )}
    </DivHome>
  );
}

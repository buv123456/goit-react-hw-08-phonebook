import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../Header/AppBar';
import { Container, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

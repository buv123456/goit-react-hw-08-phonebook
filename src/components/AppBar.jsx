import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

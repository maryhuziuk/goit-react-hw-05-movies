import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import { Container, NavItem, NavList, Navigation, HeaderBox, NavItemLink } from './SharedLayout.styled.js';

const SharedLayout = () => {
  return (
    <Container>
      <HeaderBox>
        <Navigation>
          <NavList>
            <NavItem>
              <NavItemLink to="/">
                Home
              </NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink Link to="/movies">
                Movies
              </NavItemLink>
            </NavItem>
          </NavList>
        </Navigation>
      </HeaderBox>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
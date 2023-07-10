import styled from '@emotion/styled';
import { Link} from 'react-router-dom';
   
export const HeaderBox = styled.header`
  text-align: center;
  box-shadow: 0px 4px 4px #d3d3d3;
  margin: 0 ;
  border-radius: 30px;
  background:#DCDCDC;
  
`;
export const Container = styled.div`
padding: 10px;  
  margin: 0;
`;
export const Navigation = styled.nav`
  margin-bottom: 24px;
`;
export const NavList = styled.ul`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;

  display: flex;
  gap: 18px;
  padding: 14px;
  margin: 0;
 
  

  list-style: none;
`;

export const NavItem = styled.li`
   display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #000000;
  margin-left: 20px;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active,
  &:hover,
  &:focus {
    color: #ff8533;
    text-decoration: underline;
  }
`;
export const NavItemLink = styled(Link)`
 display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-family: Cursive;
  color: #304e50;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active,
  &:hover,
  &:focus {
    color: #ff8533;
    text-decoration: underline;
  }
  `;


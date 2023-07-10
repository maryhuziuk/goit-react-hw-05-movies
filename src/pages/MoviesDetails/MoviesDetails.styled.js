import styled from '@emotion/styled';
import { Link, NavLink} from 'react-router-dom';


export const NavItemLink = styled(Link)`
 display: inline-block;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #000000;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &:hover,
  &:focus {
    color: #ff8533;
    text-decoration: underline;
  }
  `;
  export const NavLinkItem = styled(NavLink)`
 display: inline-block;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #000000;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &:hover,
  &:focus {
    color: #ff8533;
    text-decoration: underline;
  }
  `;

export const GoBackLink = styled.span`
  a {
    position: relative;
    padding-left: 12px;
  }

  a::before {
    content: '';
    display: block;

    border-color: #ff8533;
    border-style: solid;
    border-width: 0 0 2px 2px;
    height: 6px;
    left: 0;
    position: absolute;
    width: 6px;
    margin-top: -4px;
    top: 50%;

    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  span {
    color: #ff8533;
  }

  :hover,
  :focus {
    color: #ff8533;
    a::before {
      border-color: white;
    }
    span {
      color: white;
    }
  }
`;

export const FilmWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const FilmImg = styled.img`
  max-width: 182px;
  background: #424242;
  border-radius: 15px;
`;

export const FilmTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 12px;
`;

export const FilmSubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const FilmDescr = styled.p`
  font-size: 16px;
  color: #888888;
  margin-bottom: 12px;
`;

export const StyledListDescr = styled.ul`
  font-size: 16px;
  display: flex;
  gap: 18px;
  padding: 0;

  border-radius: 20px;
  color: #888888;
  margin-bottom: 12px;
  list-style: none;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 14px;

  border-radius: 20px;
  list-style: none;
`;
export const ListItem = styled.li`
  span {
    color: #ff8533;
  }

  a:hover,
  a:focus,
  a:active {
    color: #ff8533;
    span {
      color: white;
    }
  }
`;
import styled from '@emotion/styled';

export const ListFilms = styled.ul`
  margin-top: 12px;
  list-style: none;
`;
export const ItemFilms = styled.li`
  font-weight: 400;
  font-size: 14px;

  background-color: #5F9EA0;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover,
  a:focus {
    background-color: #ff8533;
    color: #111111;
    border-radius: 14px;
  }

  a {
    display: block;
    padding: 16px 16px;
  }
`;

export const SectionTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 5px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
   color: #304e50;
   font-family: Cursive;
  
`;
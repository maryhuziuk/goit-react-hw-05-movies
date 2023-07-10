import styled from '@emotion/styled';

export const InputSearch = styled.input`
   border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
  border: 1px solid #304e50;
  border-radius: 4px;

`;

export const ButtonSearch = styled.button`
  background-color: #9fc4c6;
  border: 1px solid #304e50;
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  font-family: Cursive;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #ff8533;
    color: #ffffff;
  }
`;
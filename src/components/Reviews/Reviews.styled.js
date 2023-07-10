import styled from '@emotion/styled';

export const StyledList = styled.ul`
  margin-top: 12px;
  list-style: none;
`;
export const ListItem = styled.li`
  font-size: 14px;
  padding: 6px;
  background-color: #DCDCDC;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    color: #ff8533;
  }
`;
export const ReviewsDescr = styled.p`
  color: black;
  margin-top: 6px;
`;
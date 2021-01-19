import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
`;

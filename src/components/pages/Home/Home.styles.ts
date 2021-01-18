import styled from 'styled-components';

import { mq } from '../../../utils/media';

const StyledFormContainer = styled.div`
  ${mq.lg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
  `}
`;

const StyledImageContainer = styled.div`
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export { StyledFormContainer, StyledImageContainer, StyledImage };

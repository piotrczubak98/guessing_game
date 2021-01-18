import styled from 'styled-components';
import { Layout } from 'antd';

import { mq } from '../../utils/media';

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledContent = styled(Layout.Content)`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  ${mq.xs`
    max-width: 540px;
  `}

  ${mq.md`
    max-width: 768px;
  `}

  ${mq.lg`
    max-width: 960px;
  `}

  ${mq.xl`
    max-width: 1140px;
    padding: 0;
  `}
`;

export const StyledContentWrapper = styled.div`
  ${mq.lg`
    padding-top: 24px;
  `}
`;

export const StyledMenuWrapper = styled.div`
  margin: 0 -20px;
`;

import React, { FC, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledContent, StyledLayout, StyledContentWrapper, StyledMenuWrapper, StyledMenu } from './Layout.styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const history = useHistory();

  const handleItemClick = (path: string) => {
    history.push(path);
  };

  return (
    <StyledLayout>
      <StyledContent>
        <StyledMenuWrapper>
          <StyledMenu mode="horizontal" selectable={false}>
            <StyledMenu.Item onClick={() => handleItemClick('/')} style={{ fontSize: '20px' }}>
              Home
            </StyledMenu.Item>
            <StyledMenu.Item onClick={() => handleItemClick('/leaderboard')} style={{ fontSize: '20px' }}>
              Leaderboard
            </StyledMenu.Item>
          </StyledMenu>
        </StyledMenuWrapper>
      </StyledContent>
      <StyledContent>
        <StyledContentWrapper>{children}</StyledContentWrapper>
      </StyledContent>
    </StyledLayout>
  );
};

export default Layout;

import React, { FC, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';

import { StyledContent, StyledLayout, StyledContentWrapper, StyledMenuWrapper } from './Layout.styles';

type LayoutProps = {
  children: ReactNode;
};

const { Header } = StyledLayout;

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  const history = useHistory();

  const handleItemClick = (route: string) => {
    history.push(route);
  };

  return (
    <StyledLayout>
      <Header style={{ background: 'transparent' }}>
        <StyledContent>
          <StyledMenuWrapper>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => handleItemClick('/')} style={{ fontSize: '20px' }}>
                Home
              </Menu.Item>
              <Menu.Item onClick={() => handleItemClick('/leaderboard')} style={{ fontSize: '20px' }}>
                Leaderboard
              </Menu.Item>
            </Menu>
          </StyledMenuWrapper>
        </StyledContent>
      </Header>
      <StyledContent>
        <StyledContentWrapper>{children}</StyledContentWrapper>
      </StyledContent>
    </StyledLayout>
  );
};

export default Layout;

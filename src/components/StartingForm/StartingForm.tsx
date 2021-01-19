import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';

import { ButtonWrapper, StyledCard } from './StartingForm.styles';

type StartingFormProps = {
  username?: string;
  onSubmit: (values: { username: string }) => void;
};

export const StartingForm: FC<StartingFormProps> = ({ username = '', onSubmit }) => (
  <StyledCard>
    <Form initialValues={{ username }} onFinish={onSubmit} layout="vertical">
      <Form.Item
        label={<label style={{ color: 'white', fontSize: '20px' }}>Name</label>}
        name="username"
        rules={[{ required: true, message: 'This field is required' }]}
      >
        <Input size="large" placeholder="Please enter your name" />
      </Form.Item>
      <Form.Item>
        <ButtonWrapper>
          <Button type="default" htmlType="submit" size="middle" block>
            Start
          </Button>
        </ButtonWrapper>
      </Form.Item>
    </Form>
  </StyledCard>
);

import React, { FC } from 'react';
import { Form, Input, Button, Card } from 'antd';

import { ButtonWrapper } from './StartingForm.styles';

type StartingFormProps = {
  username?: string;
  onSubmit: (values: { username: string }) => void;
};

export const StartingForm: FC<StartingFormProps> = ({ username = '', onSubmit }) => (
  <Card>
    <Form initialValues={{ username }} onFinish={onSubmit} layout="vertical">
      <Form.Item label="Name" name="username" rules={[{ required: true, message: 'This field is required' }]}>
        <Input size="large" placeholder="Please enter your name" />
      </Form.Item>
      <Form.Item>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" size="middle" block>
            Start
          </Button>
        </ButtonWrapper>
      </Form.Item>
    </Form>
  </Card>
);

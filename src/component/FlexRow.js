import React from 'react';
import { Row } from 'antd';

export default ({ children, ...rest }) => (
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex" {...rest}>
    {children}
  </Row>
);

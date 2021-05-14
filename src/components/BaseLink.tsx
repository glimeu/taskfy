import React, { AnchorHTMLAttributes } from 'react';

import { Container } from '../styles/components/BaseLink';

interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  primary?: boolean;
  disabled?: boolean;
  text?: boolean;
}

/* const BaseLinkA: React.FC<BaseLinkProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
}; */

const BaseLink = React.forwardRef<HTMLAnchorElement, BaseLinkProps>(function Component(
  { children, ...rest },
  ref
) {
  return (
    <Container ref={ref} {...rest}>
      {children}
    </Container>
  );
});

export default BaseLink;

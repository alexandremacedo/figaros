import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';

export default function AuthLayouth({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayouth.propTypes = {
  children: PropTypes.element.isRequired,
};

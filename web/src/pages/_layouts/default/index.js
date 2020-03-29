import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '~/components/Header';

export default function DefaultLayouth({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayouth.propTypes = {
  children: PropTypes.element.isRequired,
};

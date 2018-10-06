import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledCSS = css`
  flex: 1;
  height: 60px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`


const StyledLink = styled(Link)`
  ${StyledCSS}
`
const Container = styled.div`
  display: flex;
`
/* eslint-disable react/prefer-stateless-function */
export class PageB extends React.PureComponent {
  render() {
    return (
      <Container>
        <StyledLink to="/page_a">push to Page A</StyledLink>
      </Container>
    );
  }
}

export default PageB
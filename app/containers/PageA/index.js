import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import styled, { css } from 'styled-components';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToast, initApp } from './actions';
import reducer from './reducer';
import saga from './saga';

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


const ShowToast = styled.button`
  ${StyledCSS}
`;

const StyledLink = styled(Link)`
  ${StyledCSS}
`
const Container = styled.div`
  display: flex;
`

/* eslint-disable react/prefer-stateless-function */
export class PageA extends React.PureComponent {
  
  componentWillMount() {
    console.log('Page A componentWillMount')
  }
  
  componentDidMount() {
    this.props.initApp();
  }

  componentWillUnmount() {
    console.log('Page A componentWillUnmount')
  }
  

  render() {
    return (
      <Container>
        <ShowToast onClick={this.props.showToast}>show toast</ShowToast>
        <StyledLink to="/page_b">push to Page B</StyledLink>
        <ToastContainer autoClose={1000} />
      </Container>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    initApp: () => dispatch(initApp()),
    showToast: () => dispatch(showToast()),
  };
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'pageA', reducer });
const withSaga = injectSaga({ key: 'pageA', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PageA);

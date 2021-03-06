import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import AllCharacters from './AllCharacters'
import SingleCharacter from './SingleCharacter';

import { Wrapper, Header, Title, StyledLink, Menu } from './component-styles'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {

  const { children, handleClick, isLoggedIn } = props;

  return (
    <Wrapper>
      <Header>
        <Title>
          INTERPERSONAL
      </Title>
        <Menu>
          {
            isLoggedIn ?
              <div>
                {/* The navbar will show these links after you log in */}
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/cart">Cart</StyledLink>
                <StyledLink to="/search">Search</StyledLink>
                <StyledLink to="/" onClick={handleClick}>Logout</StyledLink>
              </div> :
              <div>
                {/* The navbar will show these links before you log in */}
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/login">Login</StyledLink>
                <StyledLink to="/signup">Sign Up</StyledLink>
                <StyledLink to="/cart">Cart</StyledLink>
                <StyledLink to="/search">Search</StyledLink>
              </div>
          }
        </Menu>
      </Header>

      {children}
    </Wrapper>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';

import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { connect } from 'react-redux';
import { openModal } from '../../modals/modalActions';
import { logout } from '../../auth/authActions';

class NavBar extends Component {
  handleSignIn = () => {
    this.props.dispatch(openModal('LoginModal'));
  };

  handleRegister = () => {
    this.props.dispatch(openModal('RegisterModal'));
  };

  handleSignOut = () => {
    this.props.dispatch(logout());
    this.props.history.push('/');
  };
  render() {
    const { auth } = this.props;
    const authenticated = auth.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu
              signOut={this.handleSignOut}
              currentUser={auth.currentUser}
            />
          ) : (
            <SignedOutMenu
              signIn={this.handleSignIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default withRouter(connect(mapStateToProps)(NavBar));

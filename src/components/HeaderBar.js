import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Icon,
  Label,
  Segment,
} from 'semantic-ui-react'


class HeaderBar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <Menu.Menu position='right'>
          <Dropdown item text='Profile'>
              <Dropdown.Menu>
                <Dropdown.Item><Link to="/"><b>Settings</b></Link></Dropdown.Item>
                <Dropdown.Item><Link to="/signout"><b>Sign Out</b></Link></Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      );
   }
  }


  render() {
    return (

        <Menu inverted color='blue'>
          <Menu.Item >
              <Icon name='bullhorn' />
              <b>My Project Name</b>
          </Menu.Item>
          {this.renderLinks()}
        </Menu>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(HeaderBar);

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';



import {  Grid, Divider, Form, Label, Button, Segment, Header, Message } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className='signin-form' >
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
                Semantic UI React boilerplate with authentication setup
          </Header>
          <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
            <Segment stacked>
              <Form.Field>
                <Field
                  name="username"
                  type="text"
                  placeholder='Username'
                  component={InputField}
                  autoComplete="none"
                />
              </Form.Field>
              <Divider />
              <Form.Field>
                <Field
                  name="password"
                  type="password"
                  placeholder='Password'
                  component={InputField}
                  autoComplete="none"
                />
              </Form.Field>
              <Divider />
              <div>{this.props.errorMessage}</div>
              <Button color='teal'fluid size='large'>Sign In!</Button>
              </Segment>
            </Form>
            <Message>
        Use your IT services Credentials
        </Message>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);

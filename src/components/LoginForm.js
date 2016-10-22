import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={this.onEmailChange}
            label="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
}

const mapStateToProps = (state) => {

}
export default connect(null, { emailChanged })(LoginForm);
